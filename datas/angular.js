const digimon = new URL('../images/img-angular/digimons.png', import.meta.url).href;
const pokedex = new URL('../images/img-angular/pokedex.png', import.meta.url).href;
const quizz = new URL('../images/img-angular/quizz.png', import.meta.url).href;
const x_man = new URL('../images/img-angular/x-man.png', import.meta.url).href;
const pokedex_ = new URL('../images/img-angular/pokedex_.png', import.meta.url).href;


const angular = [
  {
    id: 1,
    titulo: 'Digimons',
    descricao: 'Digimons project',
    src: digimon,
    link: 'https://master--euphonious-chaja-55b1e0.netlify.app/'
  },  
  {
    id: 2,
    titulo: 'Pokedex',
    descricao: 'Pokedex project',
    src: pokedex,
    link: 'https://master--subtle-belekoy-eacccf.netlify.app/'
  },
  {
    id: 3,
    titulo: 'Quizz',
    descricao: 'Quizz project',
    src: quizz,
    link: 'https://master--scintillating-swan-277c5c.netlify.app/'
  },
  {
    id: 4,
    titulo: 'Blog',
    descricao: 'Blog project',
    src: x_man,
    link: 'https://master--lively-puppy-aafe9d.netlify.app/'
  },
  {
    id: 5,
    titulo: 'Pokedex_',
    descricao: 'Pokedex_ project',
    src: pokedex_,
    link: 'https://master--subtle-belekoy-eacccf.netlify.app/'
  },
]

export default angular;