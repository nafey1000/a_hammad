//chunk 1 

const express = require('express');//including express package
const sendMail = require('./mail');
const app = express(); //initiating express object

const fs= require('fs');

const log = console.log; //avoiding writing console.log over and over

const path = require('path'); //paht majo ??
const PORT = 8080;

//chunk 2 . data parsing

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.post('/mail',(req,res)=>{
    
   const {subject,email,text} = req.body ;
   console.log('data: ', req.body);
    
   sendMail(email,subject,text,function(err,data){
           if(err){ 
               res.status(500).json({message:'Internal error.'});
                  }
            else{ 
                res.json({message: 'message sent!!'});
                }
            });
  
    
});



app.get('/',(req,res)=>{
     res.sendFile(path.join(__dirname,'views','temp.html'));//sending html file
    
});

app.listen( PORT, () => {
    
    log("server is starting on port: ", PORT);
    
}); 