const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoClient=require('mongodb').MongoClient;
let db;
// const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
    // res.header('Access-Control-Request-Method', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

app.get('/phones',(req,res)=>{
    db.collection('phones').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data);
    })
});

app.post('/phones',(req,res)=>{
    console.log(req.body);
    db.collection('phones').insertOne({_id:req.body.id,model:req.body.model,description:req.body.description,price:req.body.price,image:req.body.image},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
    })
    res.sendStatus(200);
});

app.put('/phones/:id',(req,res)=>{
    db.collection('phones').updateOne({_id: Number(req.params.id)},{$set:{...req.body}},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.delete('/phones/:id',(req,res)=>{
    db.collection('phones').deleteOne({_id: Number(req.params.id)},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.get('/users',(req,res)=>{
    db.collection('users').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data);
    })
});

app.post('/users',(req,res)=>{
    console.log(req.body);
    db.collection('users').insertOne({_id:req.body.id,name:req.body.name,surname:req.body.surname,login:req.body.login,email:req.body.email,password:req.body.password,stack:req.body.stack},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
    })
    res.sendStatus(200);
});

app.put('/users/:id',(req,res)=>{
    db.collection('users').updateOne({_id: Number(req.params.id)},{$set:{...req.body}},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.delete('/users/:id',(req,res)=>{
    db.collection('users').deleteOne({_id: Number(req.params.id)},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.get('/userstoreg',(req,res)=>{
    db.collection('userstoreg').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data);
    })
});

app.post('/userstoreg',(req,res)=>{
    console.log(req.body);
    db.collection('userstoreg').insertOne({_id:req.body.id,name:req.body.name,surname:req.body.surname,login:req.body.login,email:req.body.email,password:req.body.password,stack:req.body.stack},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
    })
    res.sendStatus(200);
});

app.put('/userstoreg/:id',(req,res)=>{
    db.collection('userstoreg').updateOne({_id: Number(req.params.id)},{$set:{...req.body}},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.delete('/userstoreg/:id',(req,res)=>{
    db.collection('userstoreg').deleteOne({_id: Number(req.params.id)},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

mongoClient.connect('mongodb://localhost:27017/ProductList',{useNewUrlParser: true, useUnifiedTopology: true},(err,data)=>{
    if(err) return console.log(err);
    db=data.db('ProductList');
    app.listen(4000,()=>{console.log('test rel')});
})

// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//     switch(req.url){
//         case '/': 
//             res.writeHead(200, {'Cotent-Type':'text/html'});
//             return res.end(html);
//         case '/client.js': 
//             res.writeHead(200, {'Cotent-Type':'text/javascript'});
//             return res.end(js);
//         case '/testjson.json':
//             res.writeHead(200, {'Cotent-Type':'application/json'});
//             return res.end(phones);
//         default:
//             res.writeHead(200, {'Cotent-Type':'text/plain'});
//             res.end('404');
//         }     
// });

// server.listen(4000, ()=>console.log('test rel'));
