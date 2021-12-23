name_stud = prompt("Введите имя студента.")
now_course = parseInt(prompt("Курс обучения студента."))

function Student(name = "Nobody by Ilya Naishuller", course = 1) {
    this.name = name;
    this.course = course % 4;

    this.sayHi = function () {
        alert("Привет, я " + this.name + "и я учусь на " + this.course + " курсе.");
    };

};

let stud = new Student(name_stud, now_course);

stud.sayHi();

