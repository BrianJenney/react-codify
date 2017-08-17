const express = require('express')
const app = express();

app.listen(process.env.PORT || 8081);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/test', function(req,res){
  res.send({
    name: 'Brian',
    message: 'Hey'
  })
})
