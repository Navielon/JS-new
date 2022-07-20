// Functions 

// 1. Функции деклорации и экспрешн

// Function declaration // Можно обращаться до фактического объявления функции
// function greet(name) {
//    console.log('Привет - ', name);
// }

// Function expression // Нельзя обращаться до фактического объявления функции
// const greet2 = function greet2(name){
//    console.log('Привет - ', name);

// }
// greet ('Катя')
// greet2 ('Федя')

// console.log(typeof greet);
// console.dir(greet);
//!========================================================================================================================================================

// 2. Анонимные функции

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

// 3. Стрелочные функции

// function greet (name) {
//    console.log('Привет - ', name);
// }

// const arrow = (name) => {
//    console.log('Привет - ', name);
// }

// const arrow2 = (name) => console.log('Привет - ', name);
// greet('Руслан') // Привет - Руслан
// arrow('Руслан') // Привет - Руслан
// arrow2('Руслан') // Привет - Руслан

// const pow2 = num => {
//    return num **2 // 25
// }

// const pow3 = num => num**2 // 25
// console.log(pow2(5)); // 25
// console.log(pow3(5)); // 25
//!========================================================================================================================================================

// 4. Параметры по умолчанию

const sum = (a = 1, b = 1) => a + b

console.log(sum(41, 2));
console.log(sum());

function sumAll(...all) {
   let result = 0
   for ( let num of all) {
      result += num
   }
   return result
}
const res = sumAll(1,2,3,4,5,6,7)
console.log(res);
//!========================================================================================================================================================

// 5. Замыкание