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