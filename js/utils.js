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

// Утилита общего назначения для получения случайного слйчайных значений из заданного массива
function getRandomArrayFromArray(elements) {
  // Перемешиваем массив
  const shuffled = elements.sort(() => 0.5 - Math.random());
  // Генерируем случайную длину от 1 до длины массива
  const randomLength = Math.floor(Math.random() * elements.length) + 1;
  // Возвращаем подмассив случайной длины
  return shuffled.slice(0, randomLength);
}

// Утилита общего назначения для получения случайного элемента массива
const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

// Утилита общего назначения для получения случайного фрагмента массива
const getRandomArrayPart = (array) => {
  const lastIndex = array.length - 1;
  const a = getRandomPositiveInteger(0, lastIndex);
  const b = getRandomPositiveInteger(0, lastIndex);
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return array.slice(lower, upper);
};

//Утилита переводит значение типа предложения отеля в строку на русском языке
const getPostType = (offerType) => {
  switch (offerType) {
    case 'palace':
      return 'Дворец';
    case 'flat':
      return 'Квартира';
    case 'house':
      return 'Дом';
    case 'bungalow':
      return 'Бунгало';
    case 'hotel':
      return 'Отель';
    default:
      return '';
  }
};

export { getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArrayFromArray, getRandomArrayPart, getPostType, };
