const express = require('express');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const GuestController = require('./app/controllers/GuestController');
const GuestSessionController = require('./app/controllers/GuestSessionController');
const BeaconController = require('./app/controllers/BeaconController');
const authMiddleware = require('./app/middlewares/auth');

const routes = express.Router();

// ROTAS DE USUÁRIOS

routes.post('/users', UserController.store);
routes.get('/users', authMiddleware, UserController.index);
routes.put('/users/:id', authMiddleware, UserController.update);
routes.delete('/users/:id', authMiddleware, UserController.delete);

// ROTA DE LOGIN DE USUÁRIO

routes.post('/sessions', SessionController.store);

// ROTA DE LOGIN PARA VISITANTES E INSERIR A DATA DE LOGIN NO BANCO DE DADOS (APENAS MOBILE)

routes.post('/guestsessions', GuestSessionController.store);

// ROTA PARA LISTAR AS DATAS DE LOGIN COM O ID DO VISITANTE QUE REALIZOU O LOGIN.

routes.get('/guestsessions', authMiddleware, GuestSessionController.index);

// ROTAS DE VISITANTES

routes.post('/guests', GuestController.store);
routes.get('/guests', GuestController.index);
routes.get('/guests/:id', authMiddleware, GuestController.indexById);
routes.put('/guests/:id', authMiddleware, GuestController.update);
routes.delete('/guests/:id', authMiddleware, GuestController.delete);

// ROTAS DOS BEACONS

routes.post('/beacons', authMiddleware, BeaconController.store);
routes.get('/beacons', authMiddleware, BeaconController.index);
routes.get('/beacons/:id', authMiddleware, BeaconController.indexById);
routes.put('/beacons/:id', authMiddleware, BeaconController.update);
routes.delete('/beacons/:id', authMiddleware, BeaconController.delete);

module.exports = routes;
