// 1º Create a Backend folder
// 2º Initialize npm: npm init -y
// 3º Install express framework: npm install express
// 4º Create a index.js file in the backend folder like this
// 5º In the terminal type node index.js to run

const express = require('express'); // Importing express functionalities into object "express"
const routes = require('./routes'); // './'for files
const cors = require('cors');

// Application handler. This variable will control all comunication in our backend services
const app = express();

app.use(cors()); // Framework de segurança origin. Todas as aplicações front-end podem acessar por hora. Se não utilizamos o parametro origins com a http que precisamos.
app.use(express.json()); // Força a usar JSON na requisição http
app.use(routes); // use route

// Start listening at some web port 3333 recommended if you use React: you can use other ports such as 3030. 
// Tip: localhost:8080 is commonly used by many applications. Avoid using for development.
app.listen(3333);

// To run: node index.js after creating previous steps
// CTRL + C to stop the server
// Cannot Get /  --> Routing is not available or could not reache the proper route
