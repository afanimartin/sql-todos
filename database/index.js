const fs = require("fs");

const dbFile = "./database/database.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);

db.serialize(() => {
  if (!exists) {
    db.run(
      "CREATE TABLE Todos (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT NOT NULL, completed INTEGER DEFAULT 0 )"
    );
    console.log("Todos table created!");

    db.serialize(() => {
      db.run(
        "INSERT INTO Todos (content) VALUES ('clean the house'), ('code todos api using sqlite3')"
      );
    });
  } else {
    console.log("Todos table ready to go!");
  }
});

module.exports = db;