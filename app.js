// Functions 

// Функции деклорации и экспрешн

// Function declaration // Можно обращаться до фактического объявления функции
function greet(name) {
   console.log('Привет - ', name);
}

// Function expression // Нельзя обращаться до фактического объявления функции
const greet2 = function greet2(name){
   console.log('Привет - ', name);

}
// greet ('Катя')
// greet2 ('Федя')

// console.log(typeof greet);
console.dir(greet);
//!========================================================================================================================================================

// Анонимные функции

// let counter = 0
// const interval = setInterval(function() {
//    if (counter === 5) {
//       clearInterval(interval)
//    } else console.log(++counter);
// }, 1000) // Увеличивает время на 1 секунду

// let counter = 0
// const interval = setTimeout(function() {
//    if (counter === 5) {
//       clearTimeout(interval)
//    } else console.log(++counter);
// }, 1000) // Задержка
//!========================================================================================================================================================
