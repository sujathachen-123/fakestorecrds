import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Tables from './Tables.js';
// import Cards from './practice.js/practice1.js'
// import ConditionalRend from './practice.js/nov28.js'
// import MainComp from './practice.js/parent.js';
import Fakestorecards from './practice.js/nov22.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Tables/> */}
    {/* // <Cards/> */}
    <Fakestorecards/>
    {/* <ConditionalRend isLoggedIn={false}/> */}
    {/* <MainComp login="admin"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
