const db = require("../../database/index");

// Add item to the database
const add = (content) => {
  // SQLite3 does not natively return Promises
  // hence we need to wrap the database operations with a Promise
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

const fetchOne = (id) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM Todos WHERE id=?`, [id], (error, row) => {
      if(error){
        reject(error)
      } else {
        resolve(row)
      }
    })
  })
}

// Fetch all items from the database
const fetchAll = () => {
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

module.exports = { add, fetchOne, fetchAll };
