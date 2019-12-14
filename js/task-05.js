// ------------------task-05

const checkForSpam = (string) => string.toLowerCase().includes("sale") || string.toLowerCase().includes("spam")

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));