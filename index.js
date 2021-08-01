
const { request, response } = require('express');
const express=require('express');
const Datastore=require('nedb');
const app=express();
let personname='';
let pwd='';
const port= process.env.PORT || 3000;
app.listen(port ,() =>{
    console.log("testing in server");
});

app.use(express.static('public'))
app.use(express.json({limit:'1mb'}));

const database = new Datastore("database.db");
database.loadDatabase();



app.post('/apibypublic',(request,response)=>{
    console.log("api called");
    const dd=request;
    const dba = request.body;
    personname= request.body.email,
    pwd= request.body.password;
    //console.log(dba,dba);
    
    database.insert(dba);
    console.log(dba);
    response.json({
        static:"success",
        
        
    })
});

app.post('/apigetrecords',(request,response)=>{
    console.log("first datarequeset");
   const personname =request.body.username;
    console.log("getting username from input",personname);
database.find({email:personname},(err,data)=>{
    console.log("server var",personname);
    console.log("server data from database",data);
    response.json(data);
});
});


app.post('/apibycart',(request,response)=>{
    console.log(" vm api called");
    const vv=request;
    const vvm = request.body;
    username= request.body.email,
    product= request.body.selectedobjects;
    console.log(username,product);
    //const timestamp = Date.now();
    database.insert(vvm);
    response.json({
        static:"success",
        
    })
});








/*const http = require('http');

const server = http.createServer(function (req,res){
    req.on('data',function(data){

    });
    req.on('end', function (){
    res.setHeader('Content-Type','application.json');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.writeHead(200,'OK');
     
    res.end('{"data": "just a plain old json reply"}');
 });
});

server.listen(3000, (err) =>{
    if(err) {
        console.log('bad things');
        return;
    }
    console.log('listining on port: 3000');
});*/