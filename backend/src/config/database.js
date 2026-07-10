const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../database/knowledge.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ SQLite Connected");

    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          type TEXT NOT NULL,
          title TEXT,
          content TEXT NOT NULL,
          url TEXT,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      db.run(`
        CREATE TABLE IF NOT EXISTS chunks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          itemId INTEGER,
          chunkText TEXT,
          embedding TEXT,
          FOREIGN KEY(itemId) REFERENCES items(id)
        )
      `);
    });
  }
});

module.exports = db;