
  
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.get('/', function (req, res) {
  return res.status(200).send('Hello World!');
});

app.post('/add', function (req, res) {
   var x = parseInt(req.body.a);
   var y = parseInt(req.body.b);
   var result = x + y;
   console.log(result);
   return res.send("result is "+result)
});


app.get('/sub', function (req, res) {
  return res.status(200).send('Hello World!');
});


app.get('/mul', function (req, res) {
  return res.status(200).send('Hello World!');
});


app.get('/div', function (req, res) {
  return res.status(200).send('Hello World!');
});


app.get('/careers', function (req, res) {
  var a  = req.body.a;
  var b = req.body.b;
  // console.log(req.body);
  res.send("a and b are "+a+" and "+b);
});

app.post('/careers', function (req, res) {
  // var a  = req.body.a;
  // var b = req.body.b;
  console.log(req.body);
  // res.send("a and b are "+a+" and "+b);
  // res.send('I am in POST of careers');
  console.log(req.body);
  res.send(req.body)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



/*var name = "vajid";

var calvajid = funtion(){
  console.log("call to 98993939");
  return "343434343"; 
};

module.exports = calvajid;

var lib = {};

lib.name = name;
lib.callvajid = calvajid;


module.exports = lib;

calvajid();
*/