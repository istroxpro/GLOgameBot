let num = Math.floor(Math.random() * 98) + 2
let result = false;
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
};

while (!result) {
    let answer = prompt('Угадай число от 1 до 100');
    if (answer === null) {
        alert('Игра окончена!')
        break;
    } else if (answer > num) {
        alert('Загаданное число меньше');
    } else if (answer < num) {
        alert('Загаданное число больше');
    } else if (answer = num) {
        confirm('Поздравляю, вы выйграли!!!');
        result = true;
        break;
    }
    while (!isNumber(num)) {
        alert('Введи число!!!');
    }
};