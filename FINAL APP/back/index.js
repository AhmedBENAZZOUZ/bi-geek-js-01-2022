const express = require('express');
const { createUser, authUser } = require('./my-modules/auth');
const app = express()
const port = 8080

const cors = require('cors');

app.use(cors())


app.post('/api/create-user',(req,res)=>{
    createUser(req,res);
})

app.post('/api/auth',(req,res)=>{
    authUser(req,res);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})