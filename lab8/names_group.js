function Group_stud(name) {
    this.name = name;
    this.is_admin = false;
}

let user = new Group_stud(prompt("Введите своё имя:"));

alert("Привет " + String(user.name));
let test = (user.is_admin) ?
				() => alert("Вы админ") :
				() => alert("Вы не админ");