import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; //Pacote para tratar currency. Adicione de outras linguagens se necessário
import React from 'react';
import Routes from './src/routes';

// React (Web):  <div> <span> <form> etc..we use HTML tags
// React Native (Mobile): <View>, <Text> etc.
//                         View: Filter, Div, Header etc
//                         Text: Any text; paragraph, bold text etc..

// Styles: we don't have className or Id. We use the tag styles and pass an object with style
// Proprieties: (CSS) background-color (Styles React Native) backgroundColor. We remove the '-' and the next letter will be a capital letter
//               if a value is not a number, it must be rounded by '
// There are not styles inheritance. Each element needs to have your own stylesheet

export default function App() {
  
  return (

    <Routes />

  );
}


