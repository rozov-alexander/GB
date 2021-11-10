/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций 
с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, 
складывать их и возвращать результат. Обязательно использовать оператор return.
*/

'use strict'

function sum(a, b){
    return a + b;
}

function diff(a, b){
    return a - b;
}

function multi(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}
let a = Number(prompt('Введите число a'));
let b = Number(prompt('Введите число b'));
alert('Сумма чисел будет равна ' + sum(a, b));
alert('Разность чиcел будет равна ' + diff(a, b));
alert('Произведение чисел равно ' + multi(a, b));
alert('Частное чисел будет равно ' + div(a, b));
