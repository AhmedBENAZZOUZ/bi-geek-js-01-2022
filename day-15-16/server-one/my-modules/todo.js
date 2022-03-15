//const mongodb = require('mongodb');

exports.addNewTodo = function (req,res){
    let stream = [];
    req.on('data',(info)=>{
        stream.push(info);
    }).on('end',()=>{
        const body = (JSON.parse(stream.toString()));
        
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('bigeek');

            
            const doc = {
                content : body.todo,
                createdAt : new Date()
            }; 

            appDb.collection('todos').insertOne(doc).then((response)=>{
                res.send({success:true, message:"todo created successfully."})
            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
            
            
           
        });

    }) 


   
}


exports.getTodosList = function(req,res){ 
    const mongoClient = require('mongodb').MongoClient;

    mongoClient.connect('mongodb://localhost:27017',function(err,db){
        console.log("connected");

        const appDb = db.db('bigeek'); 
        appDb.collection('todos').find({}).toArray().then((response)=>{
            res.send(response);
        }).catch((err)=>{
            res.send({success:false, message:"Something went wrong, pleaase try again."})
        }) 
       
    });
}