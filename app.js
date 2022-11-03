const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public/styles'));

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {} );
});

app.get('/contact', (req, res) => {

});

app.get('/about', (req, res) => {

});
