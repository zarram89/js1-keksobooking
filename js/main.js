const SIMILAR_POSTS_COUNT = 10;

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
]

const LAT_RANGE = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const LNG_RANGE = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const LOCATION_DECIMALS = 5;

const PRICE_RANGE = {
  MIN: 1000,
  MAX: 50000,
};

const ROOMS_RANGE= {
  MIN: 1,
  MAX: 4
};

const GUESTS_RANGE = {
  MIN: 1,
  MAX: 4
};


// Утилита общего назначения для получения случайного целого из диапазона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Утилита общего назначения для получения случайного числа с заданной точностью из диапапзона
const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return parseFloat(result.toFixed(digits));
};

// Утилита общего назначения для получения случайного фрагмента массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Утилита общего назначения для получения случайного фрагмента массива
const getRandomArrayPart = (array) => {
  const lastIndex = array.length - 1;
  const a = getRandomPositiveInteger(0, lastIndex);
  const b = getRandomPositiveInteger(0, lastIndex);
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return array.slice(lower, upper);
};


const createOffer = (lat, lng) => ({
  title: getRandomArrayElement(TITLES),
  address: `${lat}, ${lng}`,
  price: getRandomPositiveInteger(PRICE_RANGE.MIN, PRICE_RANGE.MAX),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomPositiveInteger(ROOMS_RANGE.MIN, ROOMS_RANGE.MAX),
  guests: getRandomPositiveInteger(GUESTS_RANGE.MIN, ROOMS_RANGE.MAX),
  checkin: getRandomArrayElement(CHECK_IN_OUT_TIME),
  checkout: getRandomArrayElement(CHECK_IN_OUT_TIME),
  features: getRandomArrayPart(FEATURES),
  description: getRandomArrayElement(DESCRIPTION),
  photos: getRandomArrayElement(PHOTOS),
});

const createPost = (index) => {
  const lat = getRandomPositiveFloat(LAT_RANGE.MIN, LAT_RANGE.MAX, LOCATION_DECIMALS);
  const lng = getRandomPositiveFloat(LNG_RANGE.MIN, LNG_RANGE.MAX, LOCATION_DECIMALS);

  return {
    id: index,
    author: index < SIMILAR_POSTS_COUNT ? `img/avatars/user0${index}.png` : `img/avatars/user${index}.png`,
    offer: createOffer(lat, lng),
    location: {
      lat,
      lng,
    },
  }
};

const getPosts = () =>
  Array.from({ length: SIMILAR_POSTS_COUNT }, (_, postIndex) =>
    createPost(postIndex + 1)
);

console.log(getPosts());
