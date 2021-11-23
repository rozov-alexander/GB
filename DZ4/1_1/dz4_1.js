/*
1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 
(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), 
конструктор Product, который принимает параметры name и price, сохраните их 
как свойства объекта. Также объекты типа Product должны иметь метод 
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. 
Имейте в виду, что метод make25PercentDiscount не должен быть внутри 
функции-конструктора, и также не нужно создавать отдельный объект-прототип 
(как объект transport в уроке).
*/


'use strict';


function Product(name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
    alert("Новая цена продукта: " + this.price);
}

let Obj1 = new Product('колбаса', 500);
Obj1.make25PercentDiscount();

class Product_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount () {
        this.price *= 0.75;
        alert("Новая цена продукта: " + this.price);
    }
}

let Obj2 = new Product_es6('рыба', 700);
Obj2.make25PercentDiscount();
