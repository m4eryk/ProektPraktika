const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')
const Post = require('../models/post')
const jwt = require('jsonwebtoken');
const db ="mongodb+srv://ma4eryk:dana0801@sesia-pwgdm.mongodb.net/praktika?retryWrites=true&w=majority";
const fs = require('fs')

mongoose.connect(db, err => {
    if (err) {
        console.error("Error!"+ err);
    }else{
        console.log('connected to mongodb');
    }
})

function verifyToken(req, res, next){
    if (!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if( token === 'null'){
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secreatKey');
    if(!payload){
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject
    next()
}


router.get('/', (res, req) =>{
    req.send('from API route');
})

router.post('/register', (req, res) =>{
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if(error){
            console.log(error);
        }else{
            let payload = { subject : registeredUser._id };
            let token = jwt.sign(payload, 'secretKey' );
            res.status(200).send({token});
        }
    })
})

router.post('/login', (req, res) =>{
    let userData = req.body;
    User.findOne({email : userData.email}, (error, user) => {
        if (error){
            console.log(error);
        }else {
            if(!user){
                res.status(404).send("Invalid email");
            }else if(user.password !== userData.password){
                res.status(401).send("Invalid password");
            }else{
                let payload = { subject : userData._id };
                let token = jwt.sign(payload, 'secretKey' );
                res.status(200).send({token});
            }
        }
    })
})

router.post('/admin', (req, res) =>{
    let userData = req.body;
    if( userData.isAdmin ){
        User.findOne({email : userData.email}, (error, user) => {
            if (error){
                console.log(error);
            }else {
                if(!user){
                    res.status(404).send("Invalid email");
                }else if(user.password !== userData.password){
                    res.status(401).send("Invalid password");
                }else{
                    let payload = { subject : userData._id };
                    let token = jwt.sign(payload, 'secretKey' );
                    res.status(200).send({token});
                }
            }
        })
    } else {
        res.status(401).send("Invalid data");
    }
})
router.post('/delete', (req, res) =>{
    let props = req.body
    fs.readFile(props.url, 'utf-8', (err, buf) => {
        if (err) { console.log(err) }
        const arr = JSON.parse(buf);
        for (let index = 0; index < arr.length; index++) {
            if( arr[index]['children'].length > 1 ){
                for (let j = 0; j < arr[index]['children'].length; j++) {
                    if( arr[index]['children'][j]['name'] == props.name){
                        console.log('delete')
                        arr[index]['children'].splice(j,1)
                        let config = JSON.stringify(arr)
                        fs.writeFile(props.url, config, (error)=>{
                            if(error) throw error;
                          });
                    }
                }
            }
        }
        res.status(200)
      })
})

router.post('/post', (req, res) =>{
    let postData = req.body;
    console.log(postData)
    Post.findOne({name : postData.name}, (error, post) => {
        if (error){
            console.log(error);
        }else {
            if(!post){
                res.status(404).send("Invalid name");
            }else{
                res.status(200).send(post);
            }
        }
    })
})

router.post('/tree', (req, res) => {
    fs.readFile(req.body, 'utf-8', (err, buf) => {
      if (err) { console.log(err) }
      console.log(buf)
      res.json(JSON.parse(buf))
    })
})


module.exports = router;