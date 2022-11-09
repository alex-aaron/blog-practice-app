const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const posts = [
  {
    title: "Barbarian",
    content: "Barbarian is one of the better horror films in recent memory."
  }
];

app.use(express.static(__dirname + '/public/styles'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

app.get('/', (req, res) => {
  res.render('index', { posts: posts } );
});

app.get('/posts/:index', (req, res) => {
  let index = req.params.index;
  res.render('post', { title: posts[index].title, content: posts[index].content });
});

app.get('/contact', (req, res) => {
  res.render('contact', {});
});

app.get('/about', (req, res) => {
  res.render('about', {});
});

app.get('/new', (req, res) => {
  res.render('new', {});
});

app.post('/', (req, res) => {
  let post = {};
  post.title = req.body.blogTitle;
  post.content = req.body.blogContent;
  posts.push(post);
  res.redirect('/');
});
