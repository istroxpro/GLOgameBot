'use strict';

function letsplay() {
    let randomNumber = Math.floor(Math.random() * 98) + 2;
    console.log('randomNumber = ' + typeof randomNumber + ' ' + randomNumber);
    let counter = 10;
    alert('У тебя 10 попыток');

    let askUserNumber = function () {
        let userNumber = prompt('Угадай число от 1 до 100');

        let convertToNumber = +userNumber;

        let isNumber = function (num) {
            return !isNaN(parseFloat(num)) && isFinite(num);
        };

        let warnUser = function () {
            alert('Введи число!');
            askUserNumber();
        };

        if (userNumber === null) {
            alert('Игра окончена');
            return;
        } else if (!isNumber(userNumber)) {
            alert('Введи число!');
            warnUser();
        }

        let compareUserNumber = function () {
            let compareUserNumberConfirm;
            counter--;
            let checkCounterConfirm;
            if (counter <= 0) {
                checkCounterConfirm = confirm('Попытки закончились, хотите сыграть еще?');
                if (checkCounterConfirm === true) {
                    return letsplay();
                } else {
                    return false;
                }
            }
            if (convertToNumber > randomNumber) {
                alert('Загаданное число меньше, осталось ' + counter + ' попыток');
                // checkCounter();

            } else if (convertToNumber < randomNumber) {
                alert('Загаданное число больше, осталось ' + counter + ' попыток');
                // checkCounter();

            } else if (convertToNumber === randomNumber) {
                compareUserNumberConfirm = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                if (compareUserNumberConfirm === true) {
                    return letsplay();
                } else {
                    return false;
                }
            }
            askUserNumber();

        };
        compareUserNumber();

    };
    askUserNumber();
}
let start = function () {
    let question = confirm('Угадай число от 1 до 100');
    if (question === true) {
        letsplay();
    }
};
start();