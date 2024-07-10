const pool = require("./db.js");

function createTable() {
    return pool.query(
      `
      CREATE TABLE IF NOT EXISTS info (
          id int,
          first_name VARCHAR(100),
          last_name VARCHAR(100),
          email VARCHAR(100)
      );
      `
     )
    //   .then(() => {
    //   console.log("Table 'info' created successfully.");
    // })
    // .catch((err) => {
    //   console.error("Error creating table 'info':", err);
    // });
  }

//   createTable()
//   .then(() => {
//     // Check if the table was created
//     pool.query("SELECT * FROM info LIMIT 1")
//       .then((result) => {
//         if (result.rows.length > 0) {
//           console.log("Table 'info' exists in the database.");
//         } else {
//           console.log("Table 'info' does not exist in the database.");
//         }
//       })
//       .catch((err) => {
//         console.error("Error checking table 'info':", err);
//       });
//   })
//   .catch((err) => {
//     console.error("Error creating table 'info':", err);
//   });


module.exports = { 
    createTable 
};