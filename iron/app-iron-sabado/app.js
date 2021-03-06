require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require("cors");


mongoose
  .connect(process.env.DB, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// CORS
app.use(cors({
  origin: ["http://localhost:3001","https://mynumbersapp.herokuapp.com"]
}));

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


//esto es para enlazar las rutas creadas
const index = require('./routes/index');
const auth = require('./routes/auth');

const capital = require('./routes/capital');
const negocio = require('./routes/negocio');
const pasivo = require('./routes/pasivo');
const activo = require('./routes/activo');
const estadoresultados = require('./routes/estadoresultados');

app.use('/api/auth', auth);
app.use('/api/activo', activo);
app.use('/api/pasivo', pasivo);
app.use('/api/capital', capital);
app.use('/api/negocio', negocio);
app.use('/api/estadoresultados', estadoresultados);
app.all("*",(req,res)=>{
  res.sendFile(`${__dirname}/public/index.html`)
})


module.exports = app;