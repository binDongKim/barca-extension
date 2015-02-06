var express    = require('express'),
    fs         = require('fs'),
    bodyParser = require('body-parser');

var app = express();

app.use(
  "/", //the URL throught which you want to access to you static content
  express.static(__dirname) // where your static content is located in your filesystem
);
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/expressions', function (req, res) {
  var expression = req.body.expression;
  fs.appendFile('/Users/qoo/Documents/English - Nice Expressions.md', '>' + expression + '\n\n***\n\n', function (err) {
    if (err) return console.log(err);
    res.end('Success');
  });
});

app.listen(8000, function () {
  console.log('Server runs on 8000');
});
