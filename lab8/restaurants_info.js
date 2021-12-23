is_search = true

let users = {
    availability_cards: true,
    name: "Паша",
    number_order: 7
};

let orders = {
    customer: users.name,
    total_sum: 7000,
    content: "Баварские сосиски, салат из маринованой капусты, рассольник и кофе",
    date_time: new Date(2021, 11, 21, 17, 25, 30)
};

let restaurants = {
    condition: parseInt(Math.random() * (1000000 - 177777) + 177777),
    count_customers: parseInt(Math.random() * (235000 - 77777) + 77777),
    main_city: "Berlin"
};

while (is_search == true) {

    search = prompt("О чём хотите узнать сейчас: покупатели, заказы или же рестораны?")

    if (search == "покупатели") {

        alert("Итак, перед вами " + users.name + " с заветным номером заказа " + users.number_order + ".");
        alert(users.name + " также является участником программы лояльности и содержит скидочную карту.");
        continue;

    } else if (search == "заказы") {

        alert("Перейдём к содержанию заказа, который был оформлен " + orders.date_time + ".");
        alert("Его состав: " + orders.content + ".");
        continue;

    } else if (search == "рестораны") {

        alert("Рассмотрим сеть ресторанов Podval в " + restaurants.main_city + ".");
        alert("Его состояние сейчас оценивается в " + restaurants.condition + " евро.");
        alert("Обычно в день он принимает " + restaurants.count_customers + " посетителей.");
        continue;

    } else {
        alert("Вынужден отказать в вашей просьбе и пожелаю хорошего дня. До свидания!")
        break;
    }
};