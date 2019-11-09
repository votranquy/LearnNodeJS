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

  var sql = "SELECT * FROM mydb.customers";

  connection.query(sql, function(err, rows, filds){
    if(err) throw err;
    for(var i = 0; i < rows.length; i++){
      console.log("STT: " + (i+1));
      console.log("-Name: " + rows[i].name);
      console.log("-Address: " + rows[i].address);
    }
  })
});
