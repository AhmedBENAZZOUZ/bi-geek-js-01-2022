exports.addNewVehicule = function(req,res){
    let stream = [];
    req.on('data',(info)=>{
        stream.push(info);
    }).on('end',()=>{
        const body = (JSON.parse(stream.toString()));
        
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('mygarageapp'); 
            
            const doc = {
                mark: body.mark,
                model: body.model,
                dmepc: body.dmepc,
                registration: body.registration,
                owner: body.owner
            }; 

            appDb.collection('vechiuels').insertOne(doc).then((response)=>{
                res.send({success:true, message:"vehicule inserted successfully."})
            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
           
        });

    }) 
}



exports.addNewVehicule = function(req,res){
 
        const body = (JSON.parse(stream.toString()));
        
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('mygarageapp'); 
            
            const filter = {
                owner: req.params.owner
            };

            appDb.collection('vechiuels').find(filter).toArray().then((response)=>{
                res.send(response)
            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
           
        });

   
}



