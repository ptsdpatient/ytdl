console.log("------------------------------------\n[*]Server active at http://localhost:8080 \n------------------------------------");

var express = require('express');
var app = express();
app.get('/',function(req,res){
res.send(req.params.id);
});
app.listen(8080);


