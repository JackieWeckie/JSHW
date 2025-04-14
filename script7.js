class LibraryItem {
        constructor(title, author, releaseDate) {
                this.title = title;
                this.author = author;
                this.releaseDate = releaseDate;
        }

        getInfo() {
                console.log(`Книга которая называется ${this.title} была написана автором по имени ${this.author} 
и опубликована в ${this.releaseDate} году.`);
        }
}

const libraryItem = new LibraryItem("<<A Tale of Two Cities>>", "Charles Dickens", "1859");
libraryItem.getInfo();



class Magazine extends LibraryItem {
        constructor(title, author, releaseDate, description) {
                super(title, author, releaseDate, description);
                this.title = title;
                this.author = author;
                this.releaseDate = releaseDate;
                this.description = description;
        }

        getMagazineInfo() {
                console.log(`Журнал ${this.title} написан автором по имени ${this.author}
и опубликован в ${this.releaseDate} году.

Его краткое описание:

${this.description}`);
        }
}

const magazine = new Magazine("<<Вяжем крючком>>", "Неизвестный автор", "2025", "Включите цвет: Яркий ответ монохромной зиме. Вязаные крылья: Воздушная шаль из плоских и ажурных ромбов читать онлайн бесплатно");
magazine.getMagazineInfo();