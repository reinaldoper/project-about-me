export function createNavbar() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const ul = document.createElement('ul');
  ul.classList.add('navbar-list');

  const links = [
    { href: './index.html', text: 'Techs' },
    { href: './projects.html', text: 'Projects' },
    { href: './experiences.html', text: 'AboutMe' },
    { href: './angular.html', text: 'Angular' }
  ];

  links.forEach(link => {
    const li = document.createElement('li');
    li.classList.add('navbar-item');

    const a = document.createElement('a');
    a.href = link.href;
    a.classList.add('navbar-link');
    a.textContent = link.text;

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  document.body.insertBefore(nav, document.body.firstChild);
}