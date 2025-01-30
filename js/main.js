import { createNavbar } from './navbar.js';
import tech from '../datas/tecnologias.js';
const eu = new URL('../images/image/eu.png', import.meta.url).href;
import footer from '../datas/footer.js';
import createScrollButtons from '../datas/createScrollButtons.js';

function projects() {
  const projects = document.createElement('div');
  projects.classList.add('projects');
  const ul = document.createElement('ul');
  ul.classList.add('projects-list');
  tech.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('projects-list-item');
    const img = document.createElement('img');
    img.classList.add('projects-list-item-img');
    img.src = item.src;
    img.alt = item.titulo;
    const h3 = document.createElement('h3');
    h3.classList.add('projects-list-item-title');
    h3.innerHTML = item.titulo;
    const p = document.createElement('p');
    p.classList.add('projects-list-item-description');
    p.innerHTML = item.descricao;
    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p);
    ul.appendChild(li);
  });
  projects.appendChild(ul);
  document.body.appendChild(projects);
}

const aboutMeImg = () => {
  const img = document.createElement('img');
  img.classList.add('about-me-img');
  img.src = eu;
  img.alt = 'Reinaldo';
  document.body.appendChild(img);
}

function main() {
  createScrollButtons();
  aboutMeImg();
  const aboutMe = document.createElement('div');
  aboutMe.classList.add('about-me');
  aboutMe.innerHTML = `I'm a passionate web developer with a love for creating beautiful and functional websites. 
I'm always eager to learn new technologies and improve my skills. 
I'm currently studying web development and looking for a job in the field.`;
  document.body.appendChild(aboutMe);

  
  projects();

  footer();
}

createNavbar();
main();