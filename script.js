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