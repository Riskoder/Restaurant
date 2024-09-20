import { content, createParagraph } from '../functions/index.js';

const days = [
  {
    dia: 'Lunes: ',
    info: '12am - 21pm',
  },
  {
    dia: 'Martes: ',
    info: '10am - 21pm',
  },
  {
    dia: 'Miercoles: ',
    info: '10am - 21pm',
  },
  {
    dia: 'Jueves: ',
    info: '12am - 21pm',
  },
  {
    dia: 'Viernes: ',
    info: '12am - 21pm',
  },
  {
    dia: 'Sabado: ',
    info: '10am - 23pm',
  },
  {
    dia: 'Domingo: ',
    info: '10am - 23pm',
  },
];

export const createHomePage = () => {
  const homeTitle = document.createElement('h1');
  homeTitle.classList.add('title');
  homeTitle.textContent = 'Bienvenidos a Pizzas Carmelos';

  const homeInfo = createParagraph(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suntdignissimos numquam explicabo impedit cumque nostrum minus reiciendis? Maiores, ullam!'
  );
  homeInfo.classList.add('info');

  const homeSection = document.createElement('section');
  homeSection.classList.add('hours');

  const sectionTitle = document.createElement('h4');
  sectionTitle.textContent = 'Horarios';

  const sectionDiv = document.createElement('div');
  sectionDiv.classList.add('hours-information');

  days.forEach((day) => {
    const dayInfo = createParagraph(`${day.dia} ${day.info}`);
    sectionDiv.appendChild(dayInfo);
  });

  homeSection.appendChild(sectionTitle);
  homeSection.appendChild(sectionDiv);

  content.appendChild(homeTitle);
  content.appendChild(homeInfo);
  content.appendChild(homeSection);
};
