'use strict';
console.log('main.js');

// taikomes
const formEl = document.forms[0];

// sustabdyti forma su js
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Js controll the form');
});

// paimti abu input reiksmes

// isvaly inputus

// atvaizduoti prisijungusio zmogaus username/email htmle

// issaugosim username localStorage
