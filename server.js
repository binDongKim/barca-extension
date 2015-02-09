var express    = require('express'),
    fs         = require('fs'),
    bodyParser = require('body-parser');

var app = express();

app.use(
  "/", //the URL throught which you want to access to you static content
  express.static(__dirname) // where your static content is located in your filesystem
);
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/words', function (req, res) {
  var english = req.body.english;
  var korean = req.body.korean;
  var example = req.body.example;

  fs.appendFile('/Users/qoo/Documents/English - Words.md', '| ' + english + ' | ' + korean + ' | ' + example + ' |\n', function (err) {
    if (err) return console.log(err);
    res.end('Success');
  });
});

app.post('/expressions', function (req, res) {
  var content = req.body.content;
  var id = req.body.id;

  if (id === 'expressions')
  {
    fs.appendFile('/Users/qoo/Documents/English - Nice Expressions.md', '\n>' + content + '\n\n***\n', function (err) {
      if (err) return console.log(err);
      res.end('Success');
    });
  }
  else // id === 'ask-to-briana'
  {
    fs.appendFile('/Users/qoo/Documents/English - Ask To Briana.md', '\n>' + content + '\n\n***\n', function (err) {
      if (err) return console.log(err);
      res.end('Success');
    });
  }
});

app.listen(8000, function () {
  console.log('Server runs on 8000');
});
