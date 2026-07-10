const ai = require("../config/gemini");

const askGemini = async (question, context) => {
  const prompt = `
You are an AI assistant.

Answer ONLY using the provided context.
If the answer is not available in the context, say:
"I couldn't find that information in your saved notes."

Context:
${context}

Question:
${question}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  askGemini,
};