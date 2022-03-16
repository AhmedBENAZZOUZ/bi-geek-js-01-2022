const { ObjectId } = require('mongodb');

exports.getProductsList = function(req,res){ 
    const mongoClient = require('mongodb').MongoClient;

    mongoClient.connect('mongodb://localhost:27017',function(err,db){
        console.log("connected");

        const appDb = db.db('bigeek');
        
        
        let filter = { };

        if (req.query.mark != null) {
            filter.mark = req.query.mark;
        }
        if (req.query.model != null) {
            filter.model = req.query.model;
        }

        if (req.query.price != null) {
            filter.price =  { $lt : Number(req.query.price) } ;
        }


         // { price : { $lt: 3000 } }


        appDb.collection('produits').find(filter).toArray().then((response)=>{
            res.send(response);
        }).catch((err)=>{
            res.send({success:false, message:"Something went wrong, pleaase try again."})
        }) 
       
    });
}





exports.updateProductByID = function (req,res){
    let stream = [];
    req.on('data',(info)=>{
        stream.push(info);
    }).on('end',()=>{
        const body = (JSON.parse(stream.toString()));
        
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('bigeek');


            const id = req.query.id;

            console.log(id);

            let filter = {};

            if (req.query.mark != null) {
                filter.mark = req.query.mark;
            }
             
            appDb.collection('produits').updateMany( 
                
                filter,

                { $set : body }
                
                
                ).then((response )=>{
                    res.send({ success:true, message:"updated successfully." });
                }).catch((err)=>{
                    res.send({success:false, message:"Something went wrong, pleaase try again."})
                }) 
               
            
            
           
        });

    }) 


   
}





exports.findProductByID = function(req,res){ 
    const mongoClient = require('mongodb').MongoClient;

    mongoClient.connect('mongodb://localhost:27017',function(err,db){
        console.log("connected");

        const appDb = db.db('bigeek');
        
        
         if (req.query.id != null) {
             const id  = req.query.id;

             try {
                appDb.collection('produits').findOne( { _id : ObjectId(id) } ).then((response)=>{

                    if (response != null) {
                              
                         res.send(response);
         
                    } else {
                         res.send({success:false, message: "product with id "+id+" not found"  })
                    }
                 }).catch((err)=>{
                     res.send({success:false, message:"Something went wrong, pleaase try again."})
                 })  
             } catch (error) {
                res.send({success:false, message: "product with id "+id+" not found"  })
             }

         }else{
            res.send({success:false, message:"missing ID param"})
         }


       
       
    });
}




exports.deleteProductByID = function(req,res){ 
    const mongoClient = require('mongodb').MongoClient;

    mongoClient.connect('mongodb://localhost:27017',function(err,db){
        console.log("connected");

        const appDb = db.db('bigeek');
        
        
         if (req.query.id != null) {
             const id  = req.query.id;

             try {
                appDb.collection('produits').deleteOne( { _id : ObjectId(id) } ) .then((response)=>{

                    if (response != null) {
                              
                         res.send({ success : true , message : "deleted successfully" });
         
                    } else {
                         res.send({success:false, message: "product with id "+id+" not found"  })
                    }
                 }).catch((err)=>{
                     res.send({success:false, message:"Something went wrong, pleaase try again."})
                 })  
             } catch (error) {
                res.send({success:false, message: "product with id "+id+" not found"  })
             }

         }else{
            res.send({success:false, message:"missing ID param"})
         }


       
       
    });
}