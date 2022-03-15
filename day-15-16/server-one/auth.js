var sha1 = require('sha1');

exports.createUser = function (req,res){
    let stream = [];
    req.on('data',(info)=>{
        stream.push(info);
    }).on('end',()=>{
        const body = (JSON.parse(stream.toString()));
        
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('bigeek');


            // install sha1 first
            // npm i sha1
            
            const doc = {
                username: body.username,
                password : sha1(body.password)
            }; 

            appDb.collection('users').insertOne(doc).then((response)=>{
                res.send({success:true, message:"user created successfully."})
            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
            
            
           
        });

    }) 


   
}




exports.authUser = function (req,res){
    let stream = [];
    req.on('data',(info)=>{
        stream.push(info);
    }).on('end',()=>{
        const body = (JSON.parse(stream.toString()));
        
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('bigeek');


            // install sha1 first
            // npm i sha1
            
            const filter = {
                username: body.username,
                password : sha1(body.password)
            }; 

            appDb.collection('users').findOne(filter).then((response)=>{
                
                if (response != null) {
                    res.send({success:true, message:"connected."})
                } else {
                    res.send({success:false, message:"wrong username or password."})
                }

            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
            
            
           
        });

    }) 


   
}