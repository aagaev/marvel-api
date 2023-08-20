import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import './style/style.scss';
// import MarvelService from './services/MarvelService';


// const marvel = new MarvelService();
//  marvel.getAllCharacters().then(res => console.log(res))

// marvel.getCharacter(1011052).then(res => console.log(res))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

