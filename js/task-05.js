// ------------------task-05

const checkForSpam = function (string) {
  const stringToArray = string.split(' ');
  // console.log(stringToArray)
  let spamWordOne = 'sale';
  let spamWordTwo = 'spam';

  if (string.toUpperCase().includes(spamWordOne.toUpperCase()) || string.toUpperCase().includes(spamWordTwo.toUpperCase())) {
    return true;
  } else {
    return false;
  }

}

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));