/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

'use strict';

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
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case 'сложить':
            return sum(arg1, arg2);
        case 'вычесть':
            return diff(arg1, arg2);
        case 'умножить':
            return multi(arg1, arg2);
        case 'разделить':
            return div(arg1, arg2);
        default:
            return 'Недопустимый оператор';
    }
}

let result = mathOperation(1, 2, 'сложить');
let result2 = mathOperation(10, 6, 'вычесть');
let result3 = mathOperation(10, 6, 'умножить');
let result4 = mathOperation(10, 6, 'разделить');
let result5 = mathOperation(10, 6, 'обнулить');
alert(result);
alert(result2);
alert(result3);
alert(result4);
alert(result5);
