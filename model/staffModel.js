const mongoose=require('mongoose')
const staffSchema=new mongoose.Schema({
    name:String,
    age:Number,
    salary:Number,
    role:String,
    location:String
})

const staffModel=mongoose.model('staffs',staffSchema)
module.exports=staffModel