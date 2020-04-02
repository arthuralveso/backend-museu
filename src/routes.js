const express = require('express');
const UserController = require('./app/controllers/UserController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

module.exports = routes;
