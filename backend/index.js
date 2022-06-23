const express = require('express')
const cors = require('cors')
const app = express()
const connecttomongo = require('./db')
const port = 3001

connecttomongo()

app.use(cors())

app.use(express.json())

app.use('/table', require('./routes/reqdata'))

//response for wrong endpoints
app.use((req, res, next)=>{
    res.status(404).send({message:"Not Found"});
});

app.listen(port,()=>{console.log(`server started`)});