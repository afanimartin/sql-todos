const db = require("../../database/index");

// Add item to the database
const add = (content) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Todos (content) VALUES (?)`,
      content,
      function (error) {  // 'function' keyword is important to access 'this.lastID'
        if (error) {
          reject(error);
        } else {
          resolve({ id: this.lastID, content });  // return the inserted item's ID and content
        }
      }
    );
  });
};

// Fetch all items from the database
const fetch = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Todos", (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });
};

module.exports = { add, fetch };
