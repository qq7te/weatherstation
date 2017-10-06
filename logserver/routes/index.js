var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/weather', function(req, res, next) {
  fs.readFile('data/item.txt', function(err, data) {
    if (err) {res.send(err);}
    else {
      res.send(data);
    }
  })
  //res.render('index', { title: 'Express' });
});

router.post('/weather', addItem);

module.exports = router;

function addItem(req, res) {
  var item = req.body;
  var timeStamp = Math.floor(Date.now());
  for (var prop in item) {
    var entry = timeStamp + ',' + item[prop] + '\n'
    console.log('adding ' + entry);
    fs.appendFileSync('data/' + prop + '.txt', entry);
  }
  res.sendStatus(200);
}

