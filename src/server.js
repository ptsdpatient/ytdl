console.log("------------------------------------\n[*]Server active at http://localhost:8080 \n------------------------------------");
var express = require('express');
const app = express();
app.get('/:dt',function(req,res){
  console.log("[*] request accepted");
    // res.send("hello world"+req.params.dt);
});
app.listen(8080);


