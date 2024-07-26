const postTemplate = document.querySelector('#card').content.querySelector('.popup');
const postsContainer = document.querySelector('#map-canvas');

const createPost = ({author, offer}) => {
  const post = postTemplate.cloneNode(true);

  post.querySelector('.popup__title').textContent = offer.title;
  post.querySelector('.popup__text--address').textContent = offer.address;
  post.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
// Нужно отрисовать типы на русском
  post.querySelector('.popup__type').textContent = offer.type;

  post.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  post.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  post.querySelector('.popup__description').textContent = offer.description;

  post.querySelector('.popup__avatar').src = author;
//Нужно отрисовать несколько фото
  post.querySelector('.popup__photo').src = offer.photos;

  return post;
};

const renderPosts = (posts) => {
  const fragment = document.createDocumentFragment();
  posts.forEach((post) => {
    const postElement = createPost(post);
    fragment.append(postElement);
  });

  postsContainer.append(fragment);
};

export {renderPosts};
