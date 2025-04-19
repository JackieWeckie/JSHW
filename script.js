
class CompanyWorkers {
        constructor (worker) {
                this.worker = worker;
                this.employees = [];
                this.positions = [];
        }
}

addEmployee(fullName, gender, age, position, salary) {
        const employee = {
                fullName,
                gender,
                age,
                position,
                salary
        };
        this.employees.push(employee);
        if (!this.positions.includes(position)) {
                this.positions.push(position);
        }
};

removeEmployee(index) {
        if (index >= 0 && index < this.employees.length) {
                const removedEmployee = this.employees.splice(index, 1)[0];
                if (removedEmployee.position === 'директор') {
                        this.directorIndex = null;
                }
        } else {
                console.log('Такого сотрудника не существует!');
        }
}

updateEmployee(index) {
        if (index >= 0 && index < this.employees.length) {
                const employee = this.employees[index];
                employee.fullName = prompt('Введите новое ФИО:', employee.fullName);
                employee.gender = prompt('Введите новый пол:', employee.gender);
                employee.age = prompt('Введите новый возраст:', employee.age);
                employee.position = prompt('Введите новую должность:', employee.position);
                employee.salary = prompt('Введите новую зарплату:', employee.salary);

                if (!this.positions.includes(employee.position)) {
                        this.positions.push(employee.position);
                }

                if (employee.position === 'директор') {
                        this.directorIndex = index;
                } else if (this.directorIndex === index) {
                        this.directorIndex = null;
                }
        } else {
                console.log('Некорректный индекс!');
        }
}

emploeeList() {
        this.employees.forEach((employee, index) => {
                console.log(`${index + 1}. ${employee.fullName}, ${employee.gender}, ${employee.age}, ${employee.position}, ${employee.salary}`);
        });
}

positionsList() {
        this.positions.forEach(position => {
                console.log(position);
        });
}

getDirectorName() {
        if (this.directorIndex !== null) {
                return this.employees[this.directorIndex].fullName;
        } else {
                return 'Директор не назначен';
        }
}

const myCompany = new Company('MyCompany');
myCompany.addEmployee('Иванов Иван Иванович', 'Мужской', 45, 'Директор', 100000);
myCompany.addEmployee('Петров Петр Петрович', 'Мужской', 30, 'Менеджер', 50000);
myCompany.addEmployee('Сидорова Анна Сергеевна', 'Женский', 28, 'Бухгалтер', 45000);

myCompany.listEmployees();
myCompany.listPositions();
console.log(`Директор: ${myCompany.getDirectorName()}`);

myCompany.updateEmployee(1);
myCompany.listEmployees();

myCompany.removeEmployee(0);
myCompany.listEmployees();
console.log(`Директор: ${myCompany.getDirectorName()}`);
=======
class Person {
        constructor (name, age, gender) {
                if (typeof name !== 'string' || name.trim() === '') {
                        throw new Error('Ваш ввод некорректен. Попробуйте ещё раз.');
                }
                if (typeof age !== 'number' || age <= 0) {
                        throw new Error('Возраст должен быть положительным числом.');
                } else if (age < 18) {
                        throw new Error('Вы не достигли совершеннолетия.');
                }
                if (gender !== 'мужской' && gender !== 'женский') {
                        throw new Error('Пол должен быть либо "мужской", либо "женский".');
                }

                this.name = name;
                this.age = age;
                this.gender = gender;
        }

        info() {
                console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
        }

        isAdult() {
                return this.age >= 18;
        }
}

class Student extends Person {
        constructor(name, age, gender, major, gpa) {
                super(name, age, gender);

                if (typeof major !== 'string' || major.trim() === '') {
                        throw new Error('Вы не ввели специальность! Попробуйте ещё раз.');
                }
                if (typeof gpa !== 'number' || gpa < 0 || gpa > 4) {
                        throw new Error('Средний балл должен быть числом от 0 до 4.');
                }

                this.major = major;
                this.gpa = gpa;
        }

        info() {
                super.info();
                console.log(`Я учусь на специальности ${this.major} и мой средний балл ${this.gpa}.`);
        }

        study() {
                console.log(`${this.name} учится на специальности ${this.major}.`);
        }

        improveGPA(points) {
                if (typeof points !== 'number' || points < 0) {
                        throw new Error('Количество баллов должно быть положительным числом.');
                }
                this.gpa = Math.min(4, this.gpa + points);
        }
}

const person1 = new Person("Никита Морозов", 18, "мужской");
person1.info();
person1.isAdult();

const student1 = new Student("Никита Морозов", 18, "мужской", "Java-Разработчик", 4);
student1.info();
student1.study();
student1.improveGPA(4);
