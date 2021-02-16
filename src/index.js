import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**definisco una costante con i valori che mi servono */
const utente = {
  nome: 'Elena',
  cognome: 'Signore'
};

/**creo un metodo che mi stabilisce COME devo visualizzare i dati */
function formattaNome(utente) {
  return utente.nome + ' ' + utente.cognome;
}

/**creo una metodo che UTILIZZA questi dati */
function getGreetingUser(utente){
  if(utente) {
    return <h1>Hello, {formattaNome(utente)}</h1>;
  } return <h1>  Hello Stranger</h1>
}

ReactDOM.render(
  /**richiamo il metodo che utilizza i dati dentro il render per poterlo vedere a video */
  getGreetingUser(utente),
  document.getElementById('root')
);