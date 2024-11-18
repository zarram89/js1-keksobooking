// import { getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArrayPart} from './utils.js';

const TITLES = [
  'Уютная комната в самом центре города',
  'Комната в пешей доступности от метро',
  'Комната в квартире с видом на море',
  'Квартира в престижном районе',
  'Сдается квартира с видом на реку',
  'Комната с доступом в интернет',
  'Квартира в аренду с панорамными окнами',
  'Квартира с видом на реку',
  'Комната в тихом районе',
  'Квартира в аренду в элитном жилом комплексе',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_IN_OUT_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Светлая и удобная комната с рабочим столом и балконом',
  'Ретро-стильная комната с винтажной мебелью и фотографиями из прошлого века',
  'Приглушенный интерьер с теплыми оттенками и деревянными элементами',
  'Роскошная комната с балконом и отдельной гостиной',
  'Просторная и светлая комната с панорамными окнами',
  'Очень уютная комната с видом на море',
  'Лофт-стильная комната с высокими потолками и кирпичными стенами',
  'Оригинальная комната с необычным освещением и креативным декором',
  'Мини-спа номер с джакузи и хамамом для полного расслабления',
  'Горный стиль номера с деревянными балками и камином',
];

const COMMON_PHOTO_PATH = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking';

const PHOTOS = [
  `${COMMON_PHOTO_PATH}/duonguyen-8LrGtIxxa4w.jpg`,
  `${COMMON_PHOTO_PATH}/brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${COMMON_PHOTO_PATH}/claire-rendall-b6kAwr1i0Iw.jpg`,
];

const LatRange = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const LngRange = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const LOCATION_DECIMALS = 5;

const PriceRange = {
  MIN: 1000,
  MAX: 50000,
};

const RoomsRange= {
  MIN: 1,
  MAX: 4,
};

const GuestsRange = {
  MIN: 1,
  MAX: 4,
};

const SIMILAR_POSTS_COUNT = 10;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return parseFloat(result.toFixed(digits));
};

function getRandomArrayFromArray(elements) {
  // Перемешиваем массив
  const shuffled = elements.sort(() => 0.5 - Math.random());

  // Генерируем случайную длину от 1 до длины массива
  const randomLength = Math.floor(Math.random() * elements.length) + 1;

  // Возвращаем подмассив случайной длины
  return shuffled.slice(0, randomLength);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createOffer = (lat, lng) => ({
  title: getRandomArrayElement(TITLES),
  address: `${lat}, ${lng}`,
  price: getRandomPositiveInteger(PriceRange.MIN, PriceRange.MAX),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomPositiveInteger(RoomsRange.MIN, RoomsRange.MAX),
  guests: getRandomPositiveInteger(GuestsRange.MIN, GuestsRange.MAX),
  checkin: getRandomArrayElement(CHECK_IN_OUT_TIME),
  checkout: getRandomArrayElement(CHECK_IN_OUT_TIME),
  features: getRandomArrayFromArray(FEATURES),
  description: getRandomArrayElement(DESCRIPTION),
  photos: getRandomArrayFromArray(PHOTOS),
});

const createPost = (index) => {
  const lat = getRandomPositiveFloat(LatRange.MIN, LatRange.MAX, LOCATION_DECIMALS);
  const lng = getRandomPositiveFloat(LngRange.MIN, LngRange.MAX, LOCATION_DECIMALS);

  return {
    author: index < SIMILAR_POSTS_COUNT ? `img/avatars/user0${index}.png` : `img/avatars/user${index}.png`,
    offer: createOffer(lat, lng),
    location: {
      lat,
      lng,
    },
  };
};

const getPosts = () => Array.from({length: SIMILAR_POSTS_COUNT}, (_, postIndex) => createPost(postIndex + 1));

console.log(getPosts());

// const createOffer = (lat, lng) => ({
//   title: getRandomArrayElement(TITLES),
//   address: `${lat}, ${lng}`,
//   price: getRandomPositiveInteger(PRICE_RANGE.MIN, PRICE_RANGE.MAX),
//   type: getRandomArrayElement(TYPES),
//   rooms: getRandomPositiveInteger(ROOMS_RANGE.MIN, ROOMS_RANGE.MAX),
//   guests: getRandomPositiveInteger(GUESTS_RANGE.MIN, ROOMS_RANGE.MAX),
//   checkin: getRandomArrayElement(CHECK_IN_OUT_TIME),
//   checkout: getRandomArrayElement(CHECK_IN_OUT_TIME),
//   features: getRandomArrayPart(FEATURES),
//   description: getRandomArrayElement(DESCRIPTION),
//   photos: getRandomArrayPart(PHOTOS),
// });

// const createPost = (index) => {
//   const lat = getRandomPositiveFloat(LAT_RANGE.MIN, LAT_RANGE.MAX, LOCATION_DECIMALS);
//   const lng = getRandomPositiveFloat(LNG_RANGE.MIN, LNG_RANGE.MAX, LOCATION_DECIMALS);

//   return {
//     id: index,
//     author: index < SIMILAR_POSTS_COUNT ? `img/avatars/user0${index}.png` : `img/avatars/user${index}.png`,
//     offer: createOffer(lat, lng),
//     location: {
//       lat,
//       lng,
//     },
//   };
// };

// const getPosts = () => Array.from({ length: SIMILAR_POSTS_COUNT }, (_, postIndex) => createPost(postIndex + 1));

// // export  {getPosts};
// console.log(getPosts());
