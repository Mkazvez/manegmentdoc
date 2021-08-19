const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const cors = require("cors");
const path = require('path');

global.__basedir = __dirname + "/..";

const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const db = require("./app/models");

db.sequelize.sync();

require("./app/routes/employee.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/reportgeneral.routes")(app);
require("./app/routes/order.routes")(app);
require("./app/routes/result.routes")(app);

// simple route
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});