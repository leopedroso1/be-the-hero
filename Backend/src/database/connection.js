const knex = require('knex'); // Importar o Knex
const config = require('../../knexfile'); // Importar arquivos do Knex 

const connection = knex(config.development); //Conexão de desenvolvimento que configuramos la atrás

module.exports  = connection;

