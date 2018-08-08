const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 4000);

app.get('/*',(req, res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

console.log("server started ");