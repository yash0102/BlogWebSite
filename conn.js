const mongoose = require('mongoose')

const connectDb = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/BlogWebSite').then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDb