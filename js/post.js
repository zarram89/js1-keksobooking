import { getPostType, getPostFeatures, getPostPhotos } from './utils.js';

const postTemplate = document.querySelector('#card').content.querySelector('.popup');
const postsContainer = document.querySelector('#map-canvas');


const createPost = ({author, offer}) => {
  const post = postTemplate.cloneNode(true);
  getPostFeatures(post, offer.features);
  //--->>>Предусмотрите ситуацию, когда данных для заполнения не хватает. Например, отсутствует описание. В этом случае соответствующий блок в карточке скрывается.
  post.querySelector('.popup__title').textContent = offer.title;
  post.querySelector('.popup__text--address').textContent = offer.address;
  post.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  post.querySelector('.popup__type').textContent = getPostType(offer.type);
  post.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  post.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  // post.querySelector('.popup__features').append = features;
  post.querySelector('.popup__description').textContent = offer.description;
  post.querySelector('.popup__avatar').src = author;
  post.querySelector('.popup__photos').innerHTML = getPostPhotos(offer.photos);

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
