
const db = require("../config/database");
const chunkText = require("./chunkService");
const { generateEmbedding } = require("./embeddingService");

const saveChunks = async (itemId, content) => {
  const chunks = chunkText(content);

  console.log("Item ID:", itemId);
  console.log("Chunks:", chunks.length);

  for (const [index, chunk] of chunks.entries()) {
    console.log(`Generating embedding for chunk ${index + 1}...`);

    try {
      const embedding = await generateEmbedding(chunk);

      console.log("Embedding generated");

      db.run(
        `INSERT INTO chunks(itemId, chunkText, embedding)
         VALUES (?, ?, ?)`,
        [itemId, chunk, JSON.stringify(embedding)],
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Chunk + Embedding Saved");
          }
        }
      );
    } catch (error) {
      console.log("Embedding Error:", error.message);
    }
  }
};

module.exports = {
  saveChunks,
};