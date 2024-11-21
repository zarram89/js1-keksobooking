import { getPostType, renderCardFeatures, renderCardPhotos,  } from './utils.js';

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


const createCard = (data) => {
  const {author, offer} = data;
  const {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos} = offer;

  const card = cardTemplate.cloneNode(true);

  card.querySelector('.popup__title').textContent = title;
  card.querySelector('.popup__text--address').textContent = address;
  card.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = getPostType(type);
  card.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  renderCardFeatures(card, features);
  card.querySelector('.popup__description').textContent = description;
  card.querySelector('.popup__photos').innerHTML = renderCardPhotos(photos);
  card.querySelector('.popup__avatar').src = author;

  return card;
};

const renderCards = (cards, container) => {
  const fragment = document.createDocumentFragment();

  cards.forEach((card) => {
    const cardElement = createCard(card);
    fragment.appendChild(cardElement);
  });

  container.appendChild(fragment);
};

export {renderCards};

// const featuresContainer = card.querySelector('.popup__features');
// const featuresList = featuresContainer.querySelectorAll('.popup__feature');
// featuresList.forEach((featuresListItem) => {
//   const isNecessary = features.some(
//     (feature) => featuresListItem.classList.contains(`popup__feature--${feature}`),
//   );

//   if (!isNecessary) {
//     featuresListItem.remove();
//   }
// });

// import { getPostType, getPostFeatures, getPostPhotos } from './utils.js';

// const postTemplate = document.querySelector('#card').content.querySelector('.popup');
// const postsContainer = document.querySelector('#map-canvas');


// const createPost = ({author, offer}) => {
//   const post = postTemplate.cloneNode(true);
//   getPostFeatures(post, offer.features);
//   //--->>>Предусмотрите ситуацию, когда данных для заполнения не хватает. Например, отсутствует описание. В этом случае соответствующий блок в карточке скрывается.
//   post.querySelector('.popup__title').textContent = offer.title;
//   post.querySelector('.popup__text--address').textContent = offer.address;
//   post.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
//   post.querySelector('.popup__type').textContent = getPostType(offer.type);
//   post.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
//   post.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
//   // post.querySelector('.popup__features').append = features;
//   post.querySelector('.popup__description').textContent = offer.description;
//   post.querySelector('.popup__avatar').src = author;
//   post.querySelector('.popup__photos').innerHTML = getPostPhotos(offer.photos);

//   return post;
// };

// const renderPosts = (posts) => {
//   const fragment = document.createDocumentFragment();
//   posts.forEach((post) => {
//     const postElement = createPost(post);
//     fragment.append(postElement);
//   });

//   postsContainer.append(fragment);
// };

// export {renderPosts};
