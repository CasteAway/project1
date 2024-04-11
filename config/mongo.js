const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/user')

const db = mongoose.connection;

db.on('error',(err)=>{
 console.log(err, ' error ');
 return;
})

db.once('open',()=>{
    console.log('successfully connected to database');
})