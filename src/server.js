console.log("------------------------------------\n[*]Server active at http://localhost:8080 \n------------------------------------");
var express = require ('express');
const app = express();
app.get('/:type/:url', function(req,res){
  console.log(req.params.type+" " +req.params.url);
}
);
app.listen(8080);