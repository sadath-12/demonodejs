const express = require('express')

const app = express()


app.get('/',(req,res)=>{
    res.send('Jenkins CI Pipeline with nodejs integrated !!!!!')
})

app.listen(4000,()=>console.log('connected'))