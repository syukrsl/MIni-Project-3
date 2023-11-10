const express = require("express");
const app = express();
require('dotenv').config();
let dbConnect = require("./dbConnect");


const port = process.env.PORT || 8080;

app.listen(port,()=>{
      console.log("Listening on port ", port);
});


app.use(express.json());
app.use(express.static(__dirname + '/public'));

let postRoutes = require('./routes/postRoutes')
app.use('/api/posts', postRoutes)