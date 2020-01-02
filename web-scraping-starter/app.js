const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const exphbs  = require('express-handlebars');
const data = require('./data.js');
const fetch = require('node-fetch');
const cheerio = require('cheerio')
const fs = require('fs');
const url = require('url');

const app = express();
const PORT = process.env.PORT || 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}/`));