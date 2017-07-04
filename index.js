const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv').config();
const http = require('http').Server(app);
const port = process.env.PORT || 8080;

http.listen(port,function(){
  console.log(`Listening on port ${port}`);
})