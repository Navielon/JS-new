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