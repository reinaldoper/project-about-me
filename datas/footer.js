const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('copyright-text');
  footer.innerHTML = '© 2025 - All rights reserved';

  document.body.appendChild(footer);
}



export default footer;