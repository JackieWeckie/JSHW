const lib = {
    books: [],
    addBook: function (title, author) {  
        this.books.push({title, author});
    },
    getBooks: function () { 
        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index];
            console.log(`${index + 1}. ${element.title} , ${element.author} `);
        }
    },
    getInfoByIndex: function (index) {
        if (this.books[index - 1]) {
            console.log(index, this.books[index - 1].title, this.books[index - 1].author);
        } else {
            console.error('Нет книги с таким индексом');
        }
    },
    clearBooks: function () { 
        console.log('Текущие книги', this.books);
        this.books = [];
        console.warn('Книги очищены');
        console.log('Текущие книги', this.books);
    },

    addBooks: function (books) {
        for (const book of books) {
            this.addBook(book.title, book.author);
        }
    },

    getLastAddedBook: function () {
        if (this.books.length > 0) {
            return this.books[this.books.length - 1];
        } else {
            console.warn('Нет добавленных книг');
            return null;
        }
    },

    getFirstAddedBook: function () {
        if (this.books.length > 0) {
            return this.books[0];
        } else {
            console.warn('Нет добавленных книг');
            return null;
        }
    },

    getUniqueAuthors: function () {
        const authors = new Set();
        for (const book of this.books) {
            authors.add(book.author);
        }
        return Array.from(authors);
    },

    getAllTitles: function () {
        return this.books.map(book => book.title);
    },

    getBookCountByAuthor: function (author) {
        return this.books.filter(book => book.author === author).length;
    }
};

lib.addBook('The Great Gatsby', "Scott F.");
lib.addBook('1984', "G. Orwell");
lib.addBook([
    {title: 'Ulysses', author: 'James Joyce'},
    {title: 'In Search of Lost Time', author: 'Marsel Proust'},
    {title: 'The Catcher in the Rye', author: 'J. D. Salinger'}
]);
lib.getBooks();
lib.getInfoByIndex(1);
lib.getInfoByIndex(9);
lib.getLastAddedBook();
lib.getFirstAddedBook();
lib.getUniqueAuthors();
lib.getAllTitles();
lib.getBookCountByAuthor();
lib.clearBooks();
// 1. Добавить самостоятельно два метода - вывести информацию о книге по индексу
// 2. Метод: Очистить массив книг
// 3. Метод: Добавить новый метод для добавления сразу нескольких книг - используя метод addBook
// 4. Метод: Получить последнюю подавленную книгу
// 5. Метод: Получить первую добавленную книгу
// 6. Метод получить уникальный список авторов книг
// 7. Метод получить все названия книг
// 8. Добавить метод для получения количества книг определенного автора.

