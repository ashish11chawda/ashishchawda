const express= require('express');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const methodOverride = require('method-override')
const bodyParser = require('body-parser');


const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

const router = express.Router();
router.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/home', async (req, res) => {
  res.render('index');
});

app.get('/about', async (req, res) => {
  res.render('about');
});
app.get('/blog', async (req, res) => {
  res.render('blog');
});
app.get('/contact', async (req, res) => {
  res.render('contact');
});
app.get('/education', async (req, res) => {
  res.render('education');
});
app.get('/project', async (req, res) => {
  res.render('project');
});
app.get('/header', async (req, res) => {
  res.render('header');
});
app.use('/', router);
app.listen(process.env.port || 4000);

console.log(` Server Running at PORT ${process.env.port || 4000}`);

