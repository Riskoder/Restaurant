import { content, createParagraph } from '../functions/index.js';

export function createAbout() {
  const aboutTitle = document.createElement('h2');
  aboutTitle.classList.add('title-contact');
  aboutTitle.textContent = 'Information';

  const aboutContact = document.createElement('section');
  aboutContact.classList.add('contact');

  const aboutContactTitle = document.createElement('h4');
  aboutContactTitle.textContent = 'Contact';

  const aboutTel = createParagraph('tel: 1234 5678');
  const aboutDir = createParagraph('dir: Advent Av. 156');

  aboutContact.appendChild(aboutContactTitle);
  aboutContact.appendChild(aboutTel);
  aboutContact.appendChild(aboutDir);

  const imageAttribution = document.createElement('section');
  const attributionTitle = document.createElement('h4');
  attributionTitle.textContent = 'Image Attributions';

  const attributionDiv = document.createElement('div');
  const attributionsParagraph = createParagraph(
    'Estas imagenes no son mias y pertenecen a las siguientes paginas o personas. El uso es solo con fines de estudio y practicas.'
  );

  const backgroundImage = createLink(
    'Background Image',
    'https://www.freepik.es/foto-gratis/flat-lay-comida-mejicana-copyspace_4340486.htm#query=mesa%20comida%20madera&position=2&from_view=keyword&track=ais_hybrid&uuid=b60cdbb3-5574-4ef0-8dff-1fea959bbc89',
    'Freepik'
  );
  const pizzaImage1 = createLink(
    'Pizza Napolitana',
    'https://osojimix.com/para-la-masa-de-pizza-napolitana-8-hrs-fermentacion/',
    'Image'
  );

  const pizzaImage2 = createLink(
    'Pizza Pepperoni',
    'https://roviandaplus.com/producto/pizza-de-pepperoni/',
    'Image'
  );

  attributionDiv.appendChild(attributionsParagraph);
  attributionDiv.appendChild(backgroundImage);
  attributionDiv.appendChild(pizzaImage1);
  attributionDiv.appendChild(pizzaImage2);

  imageAttribution.appendChild(attributionTitle);
  imageAttribution.appendChild(attributionDiv);

  content.appendChild(aboutTitle);
  content.appendChild(aboutContact);
  content.appendChild(imageAttribution);
}

function createLink(text, link, linkText) {
  const ImageParagrah = createParagraph(text);

  const imageLink = document.createElement('a');
  imageLink.href = link;
  imageLink.target = '_blank';
  imageLink.textContent = linkText;

  ImageParagrah.appendChild(imageLink);

  return ImageParagrah;
}
