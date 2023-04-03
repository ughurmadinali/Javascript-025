1
//в чем + стрелочных функций?

//Код можно писать меньше


2
//превратите функцию ниже в стрелочную
function newUser(name, age) {
    if (age > 18) {
        console.log(`${name} ты стар`);
    } else {
        console.log(`${name} ты не дорос`);
    }
}

hello = (name, age) => {
    if (age > 18) {
        console.log(`${name} ты стар`);
    } else {
        console.log(`${name} ты не дорос`);
    }
}

3
//делай скрипт ниже короче
let call = (a, b) => {return a + b}

let call2 = (a, b) => {
    return a + b
}