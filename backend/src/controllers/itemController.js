// const db = require("../config/database");

// const getAllItems = (req, res) => {
//   const sql = `
//     SELECT *
//     FROM items
//     ORDER BY createdAt DESC
//   `;

//   db.all(sql, [], (err, rows) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }

//     res.status(200).json({
//       success: true,
//       count: rows.length,
//       data: rows,
//     });
//   });
// };

// module.exports = {
//   getAllItems,
// };
const db = require("../config/database");

// Get all saved items
const getAllItems = (req, res) => {
  const sql = `
    SELECT *
    FROM items
    ORDER BY createdAt DESC
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  });
};

const getChunks = (req, res) => {
  db.all("SELECT * FROM chunks", [], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    console.log("Chunks found:", rows);

    res.json({
      success: true,
      count: rows.length,
      data: rows,
    });
  });
};

module.exports = {
  getAllItems,
  getChunks,
};