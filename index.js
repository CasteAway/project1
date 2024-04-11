const express = require('express');
const path = require('path');
const port = 8080;
const server  = express();
const db = require('./config/mongo');
const cookieParser = require('cookie-parser');


server.use(express.urlencoded());
server.use(cookieParser());
server.use(express.static('asset'));

server.use('/',require('./routes'))

server.set('view engine','ejs');
server.set('views',path.join(__dirname,"views"));





server.listen(port,(err)=>{
 if(err) { console.log('error connecting server'); return;}
 console.log('server connected to port ', port);
})

