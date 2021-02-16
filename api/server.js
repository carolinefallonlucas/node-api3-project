const express = require('express');
const helmet = require('helmet'); 
const cors = require('cors'); 
const morgan = require('morgan');
const usersRouter = require('./users/users-router'); 
const mw = require('./middleware/middleware'); 


const server = express();

server.use(express.json()); 
server.use(helmet()); 
server.use(cors());
server.use(morgan('dev'));  

// remember express by default cannot parse JSON in request bodies

// global middlewares and routes need to be connected here

server.use('/api/users', usersRouter); 
server.get('/', mw.logger, (req, res) => {

  res.send(
    (`<h2>Welcome to m'API</h2>
    `)
  );
});

module.exports = server;
