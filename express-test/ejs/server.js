const express = require('express');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
];
const users = ['Rose', 'Cake', 'Biff'];
app.get('/', (req, res) => {
  res.render('index', { links: links, users: users });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(8080, () => {
  console.log('Listening at localhost:8080');
});
