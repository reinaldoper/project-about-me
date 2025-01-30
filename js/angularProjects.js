import angular from "../datas/angular.js";
const eu = new URL('../images/image/eu.png', import.meta.url).href;
import { createNavbar } from "./navbar.js";
import footer from "../datas/footer.js";
import createScrollButtons from "../datas/createScrollButtons.js";


const aboutMeImg = () => {
  const img = document.createElement('img');
  img.classList.add('about-me-img');
  img.src = eu;
  img.alt = 'Reinaldo';
  document.body.appendChild(img);
}


function renderAngularProjects() {
  createNavbar();
  createScrollButtons();
  aboutMeImg();
  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projects-container');

  const ul = document.createElement('ul');
  ul.classList.add('projects-list');

  angular.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('projects-list-item');

    const a = document.createElement('a');
    a.href = item.link;
    a.target = '_blank';
    a.classList.add('projects-list-item-link');

    const img = document.createElement('img');
    img.classList.add('projects-list-item-img');
    img.src = item.src;
    img.alt = item.titulo;

    const h3 = document.createElement('h3');
    h3.classList.add('projects-list-item-title');
    h3.textContent = item.titulo;

    const p = document.createElement('p');
    p.classList.add('projects-list-item-description');
    p.textContent = item.descricao;

    a.appendChild(img);
    a.appendChild(h3);
    a.appendChild(p);
    li.appendChild(a);
    ul.appendChild(li);
  });

  projectsContainer.appendChild(ul);
  document.body.appendChild(projectsContainer);
  projectsContainer.appendChild(ul);
  document.body.appendChild(projectsContainer);
  footer();
}

renderAngularProjects();