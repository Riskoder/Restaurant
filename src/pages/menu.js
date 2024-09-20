import { content, renderContent } from '../functions/index.js';
import pizzaImage1 from '../assets/img/Pizza-Pepperoni.jpg';
import pizzaImage2 from '../assets/img/napolitana.jpg';

const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  return container;
};

const createCardSection = () => {
  const section = document.createElement('section');
  section.classList.add('cards-grid');
  return section;
};

const createCards = (imagePath, pizzaTitle, pizzaInfo) => {
  const contentCard = document.createElement('div');
  contentCard.classList.add('content-card');

  const cardImage = document.createElement('img');
  cardImage.src = imagePath;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('pizza-info');

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = pizzaTitle;
  cardTitle.classList.add('pizza-title');

  const cardParagraph = document.createElement('p');
  cardParagraph.textContent = pizzaInfo;
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardParagraph);

  contentCard.appendChild(cardImage);
  contentCard.appendChild(cardInfo);

  return contentCard;
};

const pizzas = [
  {
    image: pizzaImage1,
    title: 'Pepperoni',
    price: '$10.00',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquam debitis.',
  },
  {
    image: pizzaImage2,
    title: 'Napolitana',
    price: '$10.00',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquam debitis.',
  },
  {
    image: pizzaImage2,
    title: 'XXXXXXX',
    price: '$10.00',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquam debitis.',
  },
  {
    image: pizzaImage1,
    title: 'XXXXXXXX',
    price: '$10.00',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquam debitis.',
  },
  {
    image: pizzaImage2,
    title: 'XXXXXXX',
    price: '$10.00',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquam debitis.',
  },
  {
    image: pizzaImage1,
    title: 'XXXXXXXX',
    price: '$10.00',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquam debitis.',
  },
];

export function createMenu() {
  renderContent();
  const container = createContainer();
  const section = createCardSection();

  pizzas.forEach((pizza) => {
    const card = createCards(
      pizza.image,
      `${pizza.title} ${pizza.price}`,
      pizza.description
    );
    section.appendChild(card);
  });

  container.appendChild(section);
  content.appendChild(container);
}
