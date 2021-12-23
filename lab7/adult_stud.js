alert("Проверка пользователей на совершеннолетие.");

function rand_mas_el(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

const persons = [
    { name: 'Петя', age: rand_mas_el(10, 35) },
    { name: 'Миша', age: rand_mas_el(12, 28) },
    { name: 'Женя', age: rand_mas_el(14, 31) },
    { name: 'Яна', age: rand_mas_el(16, 42) },
    { name: 'Руслан', age: rand_mas_el(18, 54) },
];

let names = [];
let ages = [];

names = persons.map(item => item.name);
ages = persons.map(item => item.age);

alert("На начальный момент мы имеем пользователей (" + String(names) + ") со случайным возрастом (" + String(ages) + ").");

fullAgeNameAdmin = persons.filter(persons => persons.age >= 18);

adm_names = fullAgeNameAdmin.map(fullAgeNameAdmin => fullAgeNameAdmin.name);
adm_ages = fullAgeNameAdmin.map(fullAgeNameAdmin => fullAgeNameAdmin.age);

alert("Совершеннолетние пользователи: (" + adm_names + "), их возраст - (" + adm_ages + ").");