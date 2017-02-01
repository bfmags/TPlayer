var express = require('express')
var app = express()

//app.set('port', process.env.PORT || 3001);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tplayer',
  password : 'tplayer',
  database : 'tplayer'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ...");
} else {
    console.log("Error connecting database ... ");
}
});

app.get("/search",function(req,res){

        res.send(req.param('words'));

        connection.query('SELECT * from clips LIMIT 2', function(err, rows, fields) {
                connection.end();
                  if (!err)
                    res.send(rows);
                  else
                    res.send('Could not perform query');
        });
});

app.use(express.static('public'));
app.listen(3001);
