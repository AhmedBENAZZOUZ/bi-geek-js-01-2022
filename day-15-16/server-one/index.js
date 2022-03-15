const express = require('express')
const { createUser, authUser } = require('./auth')
const { getProductsList, findByID, findProductByID, deleteProductByID, updateProductByID } = require('./my-modules/products')
const { addNewTodo, getTodosList } = require('./my-modules/todo')
const app = express()
const port = 8080

/**
 * app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bonjour', (req, res) => {
    res.send('bonjour')
})


app.post('/add-fruit', (req, res) => {

    let stream = [];
    req.on('data',(info)=>{
        stream.push(info);
    }).on('end',()=>{
        const body = (JSON.parse(stream.toString()));
        res.send(body) 
    })  
})
 */
  

app.use(function(req,res,next){

    const headers  = req.headers;
 
    const key = headers.authorization;
 
    if (req.path === '/api/create-user') {
        next();
    }else if (req.path === '/api/auth') {
        next();
    } else{
        if ( key == null){
            res.send( { success : false , message : "full auth is required" } );
        }else{
            next();
        }
    } 
    
})

app.post('/api/create-new-todo',(req,res)=>{
    addNewTodo(req,res);
})

app.get('/api/todos',(req,res)=>{
    getTodosList(req,res)
})



app.get('/api/products',(req,res)=>{
     
  getProductsList(req,res);
})

app.get('/api/product',(req,res)=>{
     
    findProductByID(req,res);
  })
  
app.delete('/api/product/delete',(req,res)=>{
    
    deleteProductByID(req,res);
})


 

app.put('/api/product/update',(req,res)=>{
    updateProductByID(req,res);
})



app.post('/api/create-user',(req,res)=>{
    createUser(req,res);
})

app.post('/api/auth',(req,res)=>{
    authUser(req,res);
})

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`)
})