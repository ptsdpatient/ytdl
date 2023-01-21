console.log("------------------------------------\n[*]Server active at http://localhost:8080 \n------------------------------------");
let express = require ('express');
let ytinfo = require('updated-youtube-info');
var ytdl = require('ytdl-core'); 
let app = express();

app.get('/:type/:url', function(req,res){
  // let link="https://www.youtube.com/watch?v="+req.params.url.toString();
  ytinfo(req.params.url,function(err,info){
    if(err) throw new err;
    console.log(info);
    res.send();
  })

});
app.listen(8080);