import { createNavbar } from "./navbar.js";
import educations from "../datas/education.js";
import experiences from "../datas/experiences.js";
const eu = new URL('../images/image/eu.png', import.meta.url).href;
import footer from "../datas/footer.js";
import createScrollButtons from "../datas/createScrollButtons.js";
import aboutMe from "../datas/aboutMe.js";


const aboutMeImg = () => {
  const img = document.createElement('img');
  img.classList.add('about-me-img');
  img.src = eu;
  img.alt = 'Reinaldo';
  document.body.appendChild(img);
}

function renderExperiences() {
  createNavbar();
  createScrollButtons();
  aboutMeImg();
  aboutMe();

  const hr = document.createElement('hr');
  hr.classList.add('custom-hr');
  document.body.appendChild(hr);

  const experiencesContainer = document.createElement('div');
  experiencesContainer.classList.add('experiences-container');

  const experiencesTitle = document.createElement('h2');
  experiencesTitle.textContent = 'Experiences';
  experiencesContainer.appendChild(experiencesTitle);

  const experiencesList = document.createElement('ul');
  experiencesList.classList.add('experiences-list');

  experiences.forEach(exp => {
    const li = document.createElement('li');
    li.classList.add('experience-item');

    const h3 = document.createElement('h3');
    h3.textContent = `${exp.title} - ${exp.company}`;
    li.appendChild(h3);

    const date = document.createElement('p');
    date.classList.add('experience-date');
    date.textContent = exp.date;
    li.appendChild(date);

    const description = document.createElement('p');
    description.classList.add('experience-description');
    description.textContent = exp.description;
    li.appendChild(description);

    experiencesList.appendChild(li);
  });

  experiencesContainer.appendChild(experiencesList);

  const educationTitle = document.createElement('h2');
  educationTitle.textContent = 'Trainings';
  experiencesContainer.appendChild(educationTitle);

  const educationList = document.createElement('ul');
  educationList.classList.add('education-list');

  educations.forEach(edu => {
    const li = document.createElement('li');
    li.classList.add('education-item');

    const h3 = document.createElement('h3');
    h3.textContent = `${edu.degree} - ${edu.institution || edu.level}`;
    li.appendChild(h3);

    const date = document.createElement('p');
    date.classList.add('education-date');
    date.textContent = edu.date || '';
    li.appendChild(date);

    const description = document.createElement('p');
    description.classList.add('education-description');
    description.textContent = edu.description;
    li.appendChild(description);

    educationList.appendChild(li);
  });

  experiencesContainer.appendChild(educationList);

  document.body.appendChild(experiencesContainer);
  footer();
  
}

renderExperiences();


  