const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/ezone?readPreference=primary&appname=MongoDB%20Compass&ssl=false'

const connecttomongo =()=>{
    mongoose.connect(uri,()=>console.log('Connected to mongoDB succesfully'));
}

module.exports = connecttomongo