const db = require("../config/database");
const { generateEmbedding } = require("../services/embeddingService");
const { getTopChunks } = require("../services/similarityService");
const { askGemini } = require("../services/chatService");

const askQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    // Generate embedding for the question
    const questionEmbedding = await generateEmbedding(question);

    // Fetch all stored chunks
    db.all(
      "SELECT * FROM chunks WHERE embedding IS NOT NULL",
      [],
      async (err, rows) => {
        try {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          if (!rows || rows.length === 0) {
            return res.json({
              success: true,
              answer: "No knowledge has been saved yet.",
              sources: [],
            });
          }

          // Find most similar chunks
          const topChunks = getTopChunks(questionEmbedding, rows);

          if (topChunks.length === 0) {
            return res.json({
              success: true,
              answer: "I couldn't find any relevant information in your saved notes.",
              sources: [],
            });
          }

          // Build context for Gemini
          const context = topChunks
            .map((chunk) => chunk.chunkText)
            .join("\n\n");

          // Ask Gemini
          const answer = await askGemini(question, context);

          return res.status(200).json({
            success: true,
            answer,
            sources: topChunks,
          });

        } catch (error) {
          console.error("Gemini Error:", error);

          return res.status(500).json({
            success: false,
            message: error.message || "Failed to generate AI answer.",
          });
        }
      }
    );

  } catch (error) {
    console.error("Query Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = {
  askQuestion,
};