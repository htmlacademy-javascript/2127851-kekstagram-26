import { MESSAGES, NAMES, DESCRIPTIONS } from './data.js';

const generateMessage = function () {
  const random = getRandomPositiveInteger(1, 2);
  return random === 1
    ? MESSAGES[getRandomPositiveInteger(0, 5)]
    : `${MESSAGES[getRandomPositiveInteger(0, 5)]} ${
      MESSAGES[getRandomPositiveInteger(0, 5)]
    }`;
};
generateMessage();

const generateComment = function () {
  return {
    id: getRandomPositiveInteger(1, 99999),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: generateMessage(),
    name: NAMES[getRandomPositiveInteger(0, 6)],
  };
};

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const generateComments = function () {
  const random = getRandomPositiveInteger(1, 2);
  return random === 1
    ? [generateComment()]
    : [generateComment(), generateComment()];
};
generateComments();

const generateDescriptionsObjects = function () {
  const DESCRIPTIONS_OBJECTS = [];
  for (let i = 1; i <= 25; i++) {
    DESCRIPTIONS_OBJECTS.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[getRandomPositiveInteger(0, 4)],
      likes: getRandomPositiveInteger(15, 200),
      comments: generateComments(),
    });
  }
  return DESCRIPTIONS_OBJECTS;
};

export { generateDescriptionsObjects };
