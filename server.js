const express = require("express");
require('dotenv').config();
const dbConnect = require("./dbConnect");
dbConnect.connectMySQL();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(__dirname + '/public'));

let postRoutes = require('./routes/postRoutes')
app.use('/api/posts', postRoutes)

app.listen(port,()=>{
      console.log("Listening on port ", port);
    });
