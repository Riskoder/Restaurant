import content from './functions/index.js';
import pizzaImage1 from '../assets/img/Pizza-Pepperoni.jpg';
import pizzaImage2 from '../assets/img/napolitana.jpg';

const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  return container;
};

const createCards = (imagePath, pizzaTitle, pizzaInfo) => {
  const card = document.createElement('section');
  card.classList.add('cards-grid');

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

  card.appendChild(contentCard);

  return card;
};

const container = createContainer();

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
];

pizzas.forEach((pizza) => {
  const card = createCards(
    pizza.image,
    `${pizza.title} ${pizza.price}`,
    pizza.description
  );
  container.appendChild(card);
});

content.appendChild(container);
