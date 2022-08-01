function showTermsAndCond() {
  const divEl = document.createElement('div');
  divEl.className = 'flex card terms-container';
  divEl.innerHTML = `
  <h3>Musu slapuku <a href="terms-and-conditions.html">politika</a></h3>
  `;
  const buttonEl = document.createElement('button');
  buttonEl.textContent = 'Sutinku';
  divEl.append(buttonEl);
  document.body.append(divEl);
}

showTermsAndCond();
