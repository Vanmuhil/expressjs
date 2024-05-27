const express = require('express')
const mongoose=require('mongoose')
const staff=require('./routes/staff')

const app =express()
mongoose.connect('mongodb://127.0.0.1:27017/vanmuhil')
mongoose.connection.on('connected',()=>{
    console.log('connected sucess');
})
app.get('/', (req,res)=>{
    res.send('Home Page')
})

app.use('/staff',staff)

app.listen(3001,()=>{
    console.log("running on 3001");
})






// mongodb://localhost:27017/