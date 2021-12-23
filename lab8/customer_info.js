alert("Пожалуйста, выберите из следующего:");

point_three = prompt("Фрукты или овощи?").toLowerCase();

point_four = parseInt(prompt("Теперь загадайте число от 1 до 5."));

let customers = {
    name: ["Денис", "Лиза", "Стасик)", "Валера"],
    balance: [10345, 9612, 14755, 3152, 1521],
    like_product: {
        fruits: ["яблоко", "грейпфрут", "дыня", "мандарин", "банан"],
        vegetables: ["морковь", "огурец", "помидор"]
    },
    market: ["Метро","Вкусвилл", "Пятёрочка", "Магнит", "Лента"]
};

let number_random = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};

point_one = customers.name[number_random(1, customers.name.length)];

point_two = customers.balance[number_random(1, customers.balance.length)];

if (point_three == "фрукты") {
    point_three = customers.like_product.fruits[number_random(1, customers.like_product.fruits.length)]
} else if (point_three == "овощи") {
    point_three = customers.like_product.vegetables[number_random(1, customers.like_product.vegetables.length)]
};

point_four = customers.market[point_four % 5];

alert("Подставляю сгенерированного человека, как ваш аватар");
alert("Вас зовут " + point_one + ". Ваше состояние оценивается в " + point_two + " долларов. И вы посещаете магазин " + point_four + ".")
document.write("Вас зовут " + point_one + ". Ваше состояние оценивается в " + point_two + " долларов. И вы посещаете магазин " + point_four + ".")
