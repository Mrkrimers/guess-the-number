// программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать
// это число. Если догадка пользователя больше случайного числа, то программа должна вывести
// сообщение 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то
// программа должна вывести сообщение 'Слишком мало, попробуйте еще раз'. Если пользователь
// угадывает число, то программа должна поздравить его и вывести сообщение 'Вы угадали,
// поздравляем!'.


let randomNum = Math.floor(Math.random() * 100);
let start = 0;
let end = 100;


// console.log(randomNum);


for (let i = start; i <= end; i++) {

    let myNum = +prompt(`введите число от ${start} до ${end}`);

    if (myNum == randomNum) {
        console.log(`ВУГАДАЛ ${myNum}`);
        // alert(`ВУГАДАЛ ${myNum}`);
        break;
    } else if (myNum < randomNum) {
        start = myNum;
        console.log(`МАЛО ${myNum}`);
        // alert(`МАЛО ${myNum}`);

    } else if (myNum > randomNum) {
        end = myNum;
        console.log(`МНОГО`);
        // alert(`МНОГО ${myNum}`);
    }

}
