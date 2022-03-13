const express = require('express')
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
  

app.post('/api/create-new-todo',(req,res)=>{
    addNewTodo(req,res);
})

app.get('/api/todos',(req,res)=>{
    getTodosList(req,res)
})

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`)
})