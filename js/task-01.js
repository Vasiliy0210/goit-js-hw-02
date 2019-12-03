// ------------------task-01

const logItems = function (arr) {
    let message;
    let numberItems;
    let element;

    for (let i = 0; i < arr.length; i += 1) {
        element = arr[i];
        numberItems = Number([i]) + 1;
        message = `${numberItems} - ${element}`;
        console.log(message)
    }

}

const variantOne = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
logItems(variantOne);
const variantTwo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
logItems(variantTwo);