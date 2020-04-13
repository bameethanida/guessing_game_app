const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();
const assert = require('assert');
const ejs = require('ejs');

const url = 'mongodb://localhost:27017';
const dbName = 'pantip';
const options = { useUnifiedTopology: true }

MongoClient.connect(url, options ,(err,client)=>{
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const col = db.collection('students');

    router.get('/', (req, res) => {
        res.render('index');
    })
    router.post('/game', (req, res) => {
        const name = req.body.name
        res.render('game', {name:name})
    })
    router.get('/score', (req, res) => {
        col.find().sort({'fail':1,'time':1}).limit(5).toArray((err,result)=>{
            if(err) throw err
            res.render('score', {data:result})
        }) 
    })
    router.post('/score', (req, res) => {
        const {name,fail,time} = req.body
        col.insertOne({name,fail,time}).then(_=>{
            col.find().sort({'fail':1,'time':1}).limit(5).toArray((err,result)=>{
                if(err) throw err
                res.render('score', {data:result})
            })
        })
    })
    router.get('/delete',(req,res)=>{
        col.deleteMany({})
        res.send('Delete Success')
    })
})

module.exports = router
