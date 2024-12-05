import { getCards } from './data.js';
import { renderCards } from './card.js';
import { activatePage, deactivatePage } from './page.js';

const cardsContainer = document.querySelector('#map-canvas');

renderCards(getCards().slice(0, 1), cardsContainer);

deactivatePage();

cardsContainer.addEventListener('click', activatePage);
