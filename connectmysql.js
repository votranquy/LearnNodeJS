const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
});

connection.connect((err) => {
  if(err) throw err;
  console.log('Connected!!!!!!!!!!');
});
