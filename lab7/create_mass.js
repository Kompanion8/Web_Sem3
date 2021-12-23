
alert("Создание массива, основанное на примерах выше через map()")

function rand_mas_el(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

let down = rand_mas_el(100, 285);
let up = rand_mas_el(300, 888);

alert("Генерация массива от " + down + " до " + up);

let arr_1 = [];
let count = 0;

for (let i = 0; i < rand_mas_el(12, 32); i++) {
    arr_1.push(rand_mas_el(down, up));
    count += 1;
};

alert("Процесс генерации завершён, массив " + count + " длинны: " + arr_1);

alert("Создание массива через map().");

const arr_2 = arr_1.map(item => item + 10);

alert("Массив с увеличенными на 10 элементами: \n" + arr_2);

const arr_3 = arr_1.map(item => item * 3);

alert("Массив с увеличенными в 3 раза элементами: \n" + arr_3);