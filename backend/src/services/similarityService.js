const cosineSimilarity = require("compute-cosine-similarity");

const getTopChunks = (questionEmbedding, chunks) => {
  const scoredChunks = chunks.map((chunk) => {
    const embedding = JSON.parse(chunk.embedding);

    return {
      ...chunk,
      score: cosineSimilarity(questionEmbedding, embedding),
    };
  });

  scoredChunks.sort((a, b) => b.score - a.score);

  return scoredChunks.slice(0, 3);
};

module.exports = {
  getTopChunks,
};