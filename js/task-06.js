// ------------------task-06

let input;
const numbers = [];
let total = 0;
let message;

do {
    input = prompt('Введите пожалуйста число');
    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз')
    } else if (input === "") {
        alert('Вы ничего не ввели, попробуйте еще раз')
    } else {
        numbers.push((input));
    }

} while (input !== null)

if (numbers.includes(null)) {
    numbers.pop(null)
    console.log(numbers);
}


for (let i = 0; i < numbers.length; i += 1) {
    const element = numbers[i];
    total = total + Number(element);
    message = `Общая сумма чисел равна ${total}`

}
console.log(message)