// Массивы

const cars = ['Mazda', 'Ford', 'BMW', 'Audi']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
   {name : 'Ruslan', budget: 4200},
   {name : 'Katya', budget: 4100},
   {name : 'Vika', budget: 2200}
]
console.log(cars);

// Function
function addItemToEnd(){

}

// Method

// Добавление данных в массив
// cars.push('Porshe') // В конец
// console.log(cars);
// cars.unshift('Reno') // В начало
// console.log(cars);

// Удаление данных из массива

// const firstCar = cars.shift() // Удаляет из массива и возвращает первый элемент
// const lastCar = cars.pop() // Удаляет из массива и возвращает последний элемент
// console.log(firstCar);
// console.log(lastCar);
// console.log(cars);

//TODO========================================================================================================================================================

// Reverse 
// console.log(cars.reverse()); // Разворачивает массив

// Задача 1

// Разворот строки
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText);
//TODO========================================================================================================================================================

// console.log(cars.indexOf('BMW')) // получение индекса элемента из массива
// const index = cars.indexOf('BMW')
// cars[index] = 'Volkswagen'
// console.log(cars);
//TODO========================================================================================================================================================

// const index = people.findIndex(function(person){ // Метод findIndex является циклом
   // console.log(person)
//    return person.budget === 4100
// })

// Менее правильный способ
// let findedPerson
// for (const person of people){
//    console.log(person)
//    if (person.budget === 4100) {
//       findedPerson = person
//    }
// }
// console.log(findedPerson);

// Более правильный способ
// const find = people.find(function(person){ // Метод findIndex является циклом
   // console.log(person)
//    return person.budget === 4100
// })
// console.log(people[index]);
// console.log(find);

// const person = people.find(person => person.budget === 4100) // Сокращение лишнего кода
// console.log(person);
//TODO========================================================================================================================================================
