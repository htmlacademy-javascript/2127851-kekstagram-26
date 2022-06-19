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
