/*
(это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 
(по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и 
сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, 
который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. 
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. 
Также в конструкторе AttachedPost должно создаваться свойство highlighted со 
значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет 
назначать свойству highlighted значение true.
*/


'use strict';

// В стиле ES5


function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
};

function AttachedPost(author, text, date, highlighted = false) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}


let Obj3 = new Post('Пупкин', 'Привет всем', '2021-11-15');
Obj3.edit('Всем пока');
let Odj4 = new AttachedPost('Иванов', 'Добро пожаловать', '2021-11-16');
Odj4.edit('До свидания');
Odj4.makeTextHighlighted();

// В стиле ES6


class Post_es6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit_es6(text) {
        this.text = text;
    }
}

class AttachedPost_es6 extends Post_es6 {
    constructor(author, text, date, highlighted = false) {
        super(author, text, date);
        this.highlighted = highlighted;
    }

    makeTextHighlighted_es6() {
        this.highlighted = true;
    }
}

let Obj5 = new Post_es6('Пупкин', 'Привет всем', '2021-11-15');
Obj5.edit_es6('Всем пока');
let Odj6 = new AttachedPost_es6('Иванов', 'Добро пожаловать', '2021-11-16');
Odj6.edit_es6('До свидания');
Odj6.makeTextHighlighted_es6();
