'use strict';
console.log('main.js');

// taikomes
const formEl = document.forms[0];
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const resultEl = document.getElementById('result');

// sustabdyti forma su js
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Js controll the form');
  // paimti abu input reiksmes
  const emailVal = emailEl.value;
  const passwordVal = passwordEl.value;
  console.log({ emailVal, passwordVal });
  // isvaly inputus
  formEl.reset();
  // atvaizduoti prisijungusio zmogaus username/email htmle
  resultEl.firstElementChild.append(emailVal);
});

// issaugosim username localStorage
