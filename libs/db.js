const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'stubsuite',
// });

const db = mysql.createConnection({
  host: '70.32.23.53',
  user: 'unialso1_stubsuite',
  password: 'unialso1_stubsuite',
  database: 'unialso1_stubsuite',
});

db.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
      }
      console.log('Connected to MySQL database');
});

module.exports = db;
