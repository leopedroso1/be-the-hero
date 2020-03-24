const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//const crypto = require('crypto');
//const connection = require('./database/connection');

const routes = express.Router();

// Create our main route '/'. Root! This get function receives a REQUEST and a RESPONSE
// request >> contempla todas as informações que estão vindo na string HTTP
// response >> controla a resposta do usuário

// Ong Controller routes: Listing all ongs signed up and Creating an ONG
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Indicent Controller Routes: Listing and Creating Incidentes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Session Controller
routes.post('/sessions', SessionController.create); // Loading Ong session

// Profile Controller
routes.get('/profile', ProfileController.index); // Gets all incidents given an Ong Id

// Export all routes for the index.js file
module.exports = routes;
