// ------------------task-04

const formatString = function (string) {
    const shareStringForSymbol = string.split('')
    let stringForUser;
    // console.log(shareStringForSymbol)
    if (shareStringForSymbol.length > 40) {
        string = shareStringForSymbol.splice(0, 40);
        stringForUser = string.push('...');
        console.log(string.join(''))
    } else {
        console.log(string)
    }

}

formatString('Curabitur ligula sapien, tincidunt non.');
// вернется оригинальная строка

formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
// вернется форматированная строка

formatString('Curabitur ligula sapien.');
// вернется оригинальная строка

formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
);