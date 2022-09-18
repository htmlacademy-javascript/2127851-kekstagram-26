<<<<<<< HEAD
import { MESSAGES, NAMES, DESCRIPTIONS } from "./data.js";

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
  return console.log(DESCRIPTIONS_OBJECTS);
};

export { generateDescriptionsObjects };
=======
import {COMMENTS_TEXT} from './data.js';
function getRandomNumber (min, max) {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}

function checkStringLength (myString, maxStringLength) {
  if (myString.length <= maxStringLength) {
    return true;
  }
  return false;
}
checkStringLength(78, 589);

function getMessage () {
  let message = '';
  for (let i = 1; i <= getRandomNumber(1, 3); i++) {
    message += `${COMMENTS_TEXT[getRandomNumber(0, COMMENTS_TEXT.length-1)]  } `;
  }
  return message.trim();
}
getMessage ();

function getRandomCommentFromArray (comments)  {
  return comments[getRandomNumber(0, comments.length - 1)];
}
export {getRandomNumber, getMessage, getRandomCommentFromArray};
>>>>>>> 401146cacd248c1b58fd6ff14d8ad0f4015b38ac
