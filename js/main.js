import { getCards } from './data.js';
import { renderCards } from './card.js';

const cardsContainer = document.querySelector('#map-canvas');

renderCards(getCards().slice(0, 1), cardsContainer);
