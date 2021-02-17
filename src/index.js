import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const name = 'Josh Perez';

// /**definisco una costante con i valori che mi servono */
// const utente = {
//   nome: 'Elena',
//   cognome: 'Signore',
//   avatarUrl: 'https://www.google.com/search?q=img+gatto&sxsrf=ALeKk00C5ZRMK1nvc0mfivmmgSPD0NYf0g:1613488804973&tbm=isch&source=iu&ictx=1&fir=lwqgBNmZLq7BOM%252CHo9gUL3KBJLGhM%252C_&vet=1&usg=AI4_-kT6alL5bGlD77HOafn8EwGl-MhzBA&sa=X&ved=2ahUKEwjXz8aY2u7uAhUFOuwKHWSFDCkQ9QF6BAgEEAE#imgrc=lwqgBNmZLq7BOM'
// };

// /**creo un metodo che mi stabilisce COME devo visualizzare i dati */
// function formattaNome(utente) {
//   return utente.nome + ' ' + utente.cognome;
// }

// /**creo una metodo che UTILIZZA questi dati */
// function getGreetingUser(utente) {

//   if (utente) {
//     return <h1>Hello, {formattaNome(utente)} </h1>;
//   } return <h1>  Hello Stranger</h1>
// }

// // const element = (
// //   <div>
// //     <h1>Hello!</h1>
// //     <h2>Good to see you here.</h2>
// //   </div>
// // );

// // //questo:
// // const element = React.createElement(
// //   'h2',
// //   { className: 'greeting' },
// //   'Hello, world!'
// // );
// //è la stessa cosa che scrivere questo:
// // const element = (
// //   <h1 className="greeting">
// //     Hello, world!
// //   </h1>
// // );

// // function tick() {
// //   const element = (
// //     <div>
// //       <h1>Hello, world!</h1>
// //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
// //     </div>
// //   );
// // }

// function Welcome(props) {
//   console.log("props", props)
//   return <h1>Hello, {props.name}</h1>;
// }

// //const element= <Welcome name="Marta" surname="Sari"/>;

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Comment />

//     </div>
//   )
// };
/** ================ */

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// function formatDate(date) {
//   return date.toLocaleDateString();
// }
// function Avatar(props) {
//   return (
//     <img
//       className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   )
// }

// function UserInfo(props){
//   return(
//     <div className="UserInfo">
//        <Avatar user={props.user} />
//        <div className="UserInfo-name">
//           {props.user.name}
//        </div>
//     </div>
//   )
// }

// function Comment(props) {
//   console.log("PROPS COMMENT METHOD", props)
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//       <UserInfo user={props.author} />
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>

//   )
// }

/** ================ */

//per spostare l'implementazione della date dentro il componente Clock e non dentro una sua sitanza 
//occorre usare lo state. creiamo una classe con un costruttore e richiamiamo il Data() dentro lo state invece che
//dentro il ReactDOM.render(  <Clock date={new Date()}/>,  document.getElementById('root'));}

// function Clock(props){
//   console.log("PROPS", props)
//   return(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is { props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root'));
}

setInterval(tick, 1000);
