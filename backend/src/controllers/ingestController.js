const db = require("../config/database");
const fetchUrlContent = require("../services/fetchUrlService");
const { saveChunks } = require("../services/ragService");

const ingestContent = async (req, res) => {
  try {
    const { type, content, url } = req.body;

    if (!type) {
      return res.status(400).json({
        success: false,
        message: "Type is required",
      });
    }

    // =========================
    // Save Note
    // =========================
    if (type === "note") {
      if (!content) {
        return res.status(400).json({
          success: false,
          message: "Content is required",
        });
      }

      db.run(
        `INSERT INTO items(type, content, url) VALUES (?, ?, ?)`,
        ["note", content, ""],
        function (err) {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          // Save chunks
          saveChunks(this.lastID, content);

          return res.status(201).json({
            success: true,
            message: "Note saved successfully",
            id: this.lastID,
          });
        }
      );

      return;
    }

    // =========================
    // Save URL
    // =========================
    if (type === "url") {
      if (!url) {
        return res.status(400).json({
          success: false,
          message: "URL is required",
        });
      }

      // Fetch webpage content
      const extractedContent = await fetchUrlContent(url);

      db.run(
        `INSERT INTO items(type, content, url) VALUES (?, ?, ?)`,
        ["url", extractedContent, url],
        function (err) {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          // Save chunks
          saveChunks(this.lastID, extractedContent);

          return res.status(201).json({
            success: true,
            message: "URL saved successfully",
            id: this.lastID,
          });
        }
      );

      return;
    }

    return res.status(400).json({
      success: false,
      message: "Invalid type. Use 'note' or 'url'.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  ingestContent,
};
