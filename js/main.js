// 1
function getRandomNumber (min, max) {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}

//  2
function checkStringLength (myString, maxStringLength) {
  if (myString.length <= maxStringLength) {
    return true;
  }
  return false;
}
checkStringLength ('1213,3');


const COMMENTS_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Олег Яковлев',
  'Виктор Голубчиков',
  'Наталья Мартынова',
  'Екатерина Иванова',
  'Арсений Кравченко',
  'Тимофей Карпов',
  'Анастасия Марьенкова',
  'Илья Чернов',
  'Елена Артёмова',
  'Александр Новиков',
  'Станислав Гусев',
  'Алексей Тарасов',
  'Иван Помидоров',
  'Лариса Топова',
  'Оксана Сомова',
];

const DESCRIPIONS_TEXT = [
  'Пока на расслабоне, на чиле',
  'Моя первая фотокарточка',
  'Не судите строго',
];

const MIN_LIKES_NUMBER = 15;
const MAX_LIKES_NUMBER = 200;
const PHOTO_OBJECTS_NUMBER = 25;
const COMMENTS = [];

function getRandomCommentFromArray ()  {
  return COMMENTS[getRandomNumber(0, COMMENTS.length - 1)];
}

function generateComments () {
  for (let i = 1; i <= PHOTO_OBJECTS_NUMBER; i++) {
    const COMMENT_CONTENT = {};
    COMMENT_CONTENT.id = i;
    COMMENT_CONTENT.avatar = `img/avatar-${getRandomNumber(1,6)}.svg`;
    COMMENT_CONTENT.message = COMMENTS_TEXT[[getRandomNumber(0, COMMENTS_TEXT.length-1)]]; //как сделать так, чтобы было одно или несколько предложений?
    COMMENT_CONTENT.name =  NAMES[getRandomNumber(0, NAMES.length-1)];
    COMMENTS.push(COMMENT_CONTENT);
  }
  return COMMENTS;
}
generateComments ();


function generatePhotoDescription () {
  const GENERATED_PHOTO_DESCRIPTIONS = [];
  for (let i = 1; i <= PHOTO_OBJECTS_NUMBER; i++) {
    const PHOTO_DESCRIPTION = {};
    PHOTO_DESCRIPTION.id = i;
    PHOTO_DESCRIPTION.url = `photos/${i}.jpg`;
    PHOTO_DESCRIPTION.description = DESCRIPIONS_TEXT[getRandomNumber(0, DESCRIPIONS_TEXT.length-1)];
    PHOTO_DESCRIPTION.likes = getRandomNumber (MIN_LIKES_NUMBER,MAX_LIKES_NUMBER);
    PHOTO_DESCRIPTION.comments = getRandomCommentFromArray(); //как сделать так, чтобы был один или несколько комментов?
    GENERATED_PHOTO_DESCRIPTIONS.push(PHOTO_DESCRIPTION);
  }
  return GENERATED_PHOTO_DESCRIPTIONS;
}
generatePhotoDescription ();


