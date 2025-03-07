const aboutMe = () => {
  const aboutMe =
  document.createElement('div');
  aboutMe.classList.add('about-me');
  aboutMe.innerHTML = `I'm a passionate web developer with a love for creating beautiful and functional websites. 
  I'm always eager to learn new technologies and improve my skills. 
  I'm software engineer and looking for a job in the field.`;
  document.body.appendChild(aboutMe);
}

export default aboutMe;