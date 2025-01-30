function createScrollButtons() {
  const upButton = document.createElement('button');
  upButton.classList.add('scroll-button', 'scroll-up');
  upButton.innerHTML = '&#9650;';
  upButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const downButton = document.createElement('button');
  downButton.classList.add('scroll-button', 'scroll-down');
  downButton.innerHTML = '&#9660;';
  downButton.onclick = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  document.body.appendChild(upButton);
  document.body.appendChild(downButton);
}


export default createScrollButtons;