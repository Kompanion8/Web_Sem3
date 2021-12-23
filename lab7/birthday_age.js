
alert("Сколько лет пользователям в 2021 году.")

let down = 1922;
let up = 2018;

function rand_mas_el(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

let arr_1 = [];
let count = 0;

for (let i = 0; i < rand_mas_el(10, 30); i++) {
    arr_1.push(rand_mas_el(down, up));
    count += 1;
};

alert("Массив с годами рождения: " + arr_1);

const arr_ages = arr_1.map(item => (2021 - item));

alert("Возраст пользователей в 2021 году: \n" + arr_ages);