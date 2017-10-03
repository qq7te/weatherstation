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
  for (var prop in item) {
    //console.log('adding ' + prop + ' with ' + item[prop]);
    fs.appendFileSync(prop + '.txt', item[prop] + '\n');
  }
  res.sendStatus(200);
}

