require("dotenv").config();

const { generateEmbedding } = require("./src/services/embeddingService");

(async () => {
  try {
    const embedding = await generateEmbedding(
      "React is a JavaScript library."
    );

    console.log("Embedding Length:", embedding.length);
    console.log(embedding.slice(0, 10));
  } catch (err) {
    console.error(err);
  }
})();