const Express = require("express");
var mysql = require('mysql');
const BodyParser = require("body-parser");
var PORT=5000;
var app = Express();
var cors = require('cors')
app.use(cors())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
  });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  con.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });

  app.get('/customers', (req, res) => {
    con.query('SELECT * FROM customers', (err, results) => {
      if (err) {
        res.status(500).send('Error fetching users from database');
      } else {
        res.json(results);
      }
    });
  });

/*app.get("/studata/:id", async (request, response) => {
    var result= await collection.findOne({"rno":request.params.id});
    response.send(result);
});

app.post("/studata", async (request, response) => {
    var result = await collection.insertOne(request.body);
     response.send(result);
});

app.put("/studata/:id", async (request, response) => {
    var result = await collection.updateOne({"rno":request.params.id},{$set:request.body});
    response.send(result);
    });

app.delete("/studata/:id", async (request, response) => {
        var result = await collection.deleteOne({ "rno":request.params.id});
             response.send(result);
         });

app.post("/register", async (request, response) => {
            var result = await collection1.insertOne(request.body);
             response.send(result);
     });*/
