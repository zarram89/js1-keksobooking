import { getPostType } from './utils.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

// Функция отрисовывает фото
const renderCardPhotos = (photosSrcArray) => photosSrcArray.map((photoSrc) =>
  `<img src=${photoSrc} class="popup__photo" width="45" height="40" alt="Фотография жилья">
  `).join('');

// Функция отрисовывает только имеющиеся в предложении опции и удаляет отсутствующие
const renderCardFeatures = (card, featuresArray) => {
  const featuresContainer = card.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  const modifiers = featuresArray.map((feature) => `popup__feature--${feature}`);

  featuresList.forEach((featuresListItem) => {
    const modifier = featuresListItem.classList[1]; // 1 - это индекс нужного класса в атрибуте class

    if (!modifiers.includes(modifier)) {
      featuresListItem.remove();
    }
  });
};

const createCard = (card) => {
  const {author, offer} = card;
  const {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos} = offer;

  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = title;
  cardElement.querySelector('.popup__text--address').textContent = address;
  cardElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = getPostType(type);
  cardElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  renderCardFeatures(cardElement, features);

  cardElement.querySelector('.popup__description').textContent = description;
  cardElement.querySelector('.popup__photos').innerHTML = renderCardPhotos(photos);
  cardElement.querySelector('.popup__avatar').src = author;

  return cardElement;
};

const renderCards = (cards, container) => {
  const similarListfragment = document.createDocumentFragment();

  cards.forEach((card) => {
    const cardElement = createCard(card);
    similarListfragment.appendChild(cardElement);
  });

  container.appendChild(similarListfragment);
};

export { renderCards };
