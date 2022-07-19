// 1 Переменные JavaScript
// var name = 'Ruslan'; // Не используется

// let lastName = 'Gavrilin' // Используется
// const firstName = 'Ruslan' // Используется
// let age = 22;

// age = 25
// const $ = 'private'
// const _ = 'private'
// const if = 'private' err

// const withNum5 = 5

// const 5withNum = 5  err
//!========================================================================================================================================================

// 2 Мутирование

// console.log('Имя человека: ' + firstName + ' ' + ', а имя человека: ' + age);
// alert('Имя человека: ' + firstName + ' ' + ', а имя человека: ' + age);

// const lastName = prompt('Введите фамилию');
// console.log(firstName + lastName + age);

//!========================================================================================================================================================

// 3 Операторы

// const currentYear = 2022
// let currentYear = 2022
// const birthYear = 2000

// const age = currentYear - birthYear;

// const a = 10
// const b = 5
// let c = 32


// c += a // c = c + a
// c -= a // c = c - a
// c *= a // c = c * a
// c /= a // c = c / a

//// console.log(age);
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// // console.log(currentYear++); // Инкриминтирует значение на 1 после значения
// console.log(++currentYear); // Инкриминтирует значение на 1 перед значения
// console.log(currentYear);
// console.log(c);
//!========================================================================================================================================================

// 4. Типы данных

// const isProgrammer = true; // Первый (Boolean)
// const name = 'Руслан'; // Второй (string)
// const age = 22; // Третий (number)
// let x // Четвертый (undefind)
// null // Пятый (object)
// console.log(typeof isProgrammer); // Тип данных
// console.log(typeof name); // Тип данных
// console.log(typeof age); // Тип данных
// console.log(typeof x); // Тип данных
// console.log(typeof null); // Тип данных
//!========================================================================================================================================================

// 5. Приоритет операторов

// const fullAge = 22
// const birthYear = 2000
// const currentYear = 2022
// >
// <
// >=
// <=
// const isFullAge = (currentYear - birthYear) >= fullAge // 22 >= 22 => true
// console.log(isFullAge);
//!========================================================================================================================================================

// 6. Условные операторы

// const courseStatus = 'fail'; // ready, fail, pending

// if (courseStatus === 'ready') {
//    console.log('Курс уже проходится, и скоро я стану джуном!');
// } else if (courseStatus === 'pending') {
//    console.log('Курс ещё не проходится, но я все равно скоро я стану джуном!');
// } else if (courseStatus === 'fail') {
//    console.log('Курс провален, но я все равно скоро я стану джуном!');
// } else {
//    console.log('Я в любом случае стану джуном. Или мидлом. Или тимлидом.')
// }

// Boolean значения
// const isReady = true;

// if (isReady === true) {
//    console.log('Готово!');
// }
// // Нет смысла писать ()=== true)
// if (isReady) {
//    console.log('Готово!');
// } else {
//    console.log('Все не готово');
// }


// Тернарное выражение
// isReady ? console.log('Все готово'): console.log('Все не готово');;


// Что такое двойное равно (==) и тройное (===)
// const num1 = 42
// const num2 = '42'
// console.log(num1 == num2); // True (Хотя тут разные типы данных! (Number и String))
// console.log(num1 === num2); // False (Тут разные типы данных! (Number и String))
//!========================================================================================================================================================

// 7. Булевая логика

// Логический оператор > И < (&&)

// (True)
// const a = true && true;
// console.log(a);

// (False)
// const b = true && false;
// console.log(b);

// (False)
// const c = false && true;
// console.log(c);

// (False)
// const d = false && false;
// console.log(d );


// Логический оператор > ИЛИ < (||)

// (True)
// const a = true || true;
// console.log(a);

// (True)
// const b = true || false;
// console.log(b);

// (True)
// const c = false || true;
// console.log(c);

// (False)
// const d = false || false;
// console.log(d );


// Логический оператор > НЕ < (!) Отрицание

// (True)
// const a = true;
// console.log(a);

// (False)
// const b = !true;
// console.log(b);

// (True) 
// const c = !!true;
// console.log(c);

// MDN
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators
//!========================================================================================================================================================

// 8. Функции

function calculateAge (birthYear) {
   const currentYear = 2022
   return currentYear - birthYear;
}

console.log(calculateAge(2000));
console.log(calculateAge(2003));
console.log(calculateAge(1980));

function logInfoAbout (firstName, year){
   const age = calculateAge (year)
   if (age > 0) {
   console.log(`Человек по имени ${firstName}; Возраст :  ${age}`);
   } else {
      console.log('Человек ещё не родился!');
   }
}
logInfoAbout('Руслан', 2000)
logInfoAbout('Катя', 2003)
logInfoAbout('Катя', 2023)
//!========================================================================================================================================================

