const express = require("express");
const app = express();

const part = process.env.PORT || 5000 ;



app.get('/', (req, res)=> {

    res.send("Hello world")
})


app.listen(part, ()=> {
    console.log(`Server is runig ${part}`)
})