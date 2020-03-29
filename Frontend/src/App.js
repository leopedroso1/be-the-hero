import React from 'react';
//import Logon from './pages/Logon'; // Como criamos o logon com index.js ele ja pega essa por padrão. Dessa forma criamos cada página por PASTA!
import Routes from './routes'; // Como definimos as rotas então basta importamos ela por aqui e alterar o arquivo "routes.js"
import './global.css';



function App() {
 return (
    <Routes />
  );
}

export default App;
