// Objects

// const person = {
//    name: 'Ruslan',
//    age : 22,
//    isProgrammer: true,
//    languages: ['ru', 'en', 'by'],
   // 'complex key': 'Complex key',
   // ['key_' + (1+3)] : 'Computed key', // key__4
//    greet() {
//       console.log('Greet from person');
//    },
//    info(){
//       console.log(this);
//       console.info('Информация про человека по имени: ', this.name);
//    }
// }

// console.log(person.name);
// const ageKey = 'age'
// console.log(person[ageKey]);
// console.log(person['complex key']);
// console.log(person);
// person.greet()

// person.age++
// person.languages.push('de')
// console.log(person);
// // person['key_4'] = undefined
// delete person['key_4'] // Удаление ключа из объекта
// console.log(person);
// console.log(person['key_4']);

// const name = person.name
// const age = person.age
// const languages  = person.languages
// console.log(name, age, languages);

// const {name, age: personAge, languages} = person

// console.log(name, personAge, languages);
//TODO========================================================================================================================================================

// console.log(person);
//  for (let key in person) {
//    if (person.hasOwnProperty(key)){
//       console.log('key:', key);
//       console.log('value:', person[key]);
//    }
//  }

// const keys = Object.keys(person)
// keys.forEach((key) => {
//    console.log('key:', key);
//    console.log('value:', person[key]);
// })
// console.log(keys);


// Object.keys(person).forEach((key) => {
//    console.log('key:', key);
//    console.log('value:', person[key]);
// })
//TODO========================================================================================================================================================

// person.info()

// const logger = {
//    keys() {
//       console.log('Object Keys: ', Object.keys(this))
//    },
//    keysAndValue() {
      // Object.keys(this).forEach( key =>{
      //    console.log(`${key}: ${this[key]}`);
      // })
      // const self = this
//       Object.keys(this).forEach( function(key) {
//          console.log(`${key}: ${this[key]}`);
//       }.bind(this))
//    },
//    withParams(top = false, between = false, bottom = false){
//       if (top) {
//          console.log('------- Start -------');
//       }
//       Object.keys(this).forEach((key, index, array) => {
//          console.log(`${key}: ${this[key]}`);
//          if (between && index !== array.length-1) {
//             console.log('------------------');
//          }
//       })
//       if (bottom) {
//          console.log('-------- End --------');
//       }
//    }
// }

// logger.keys.bind() // Метод Bind привязывает определенный контекст который мы сами выберем
// Метод bind возвращает новую функцию
// const bound = logger.keys.bind(logger)
// const bound = logger.keys.bind(person) // Получаем уже ключи самого Person
// bound()
// logger.keys.call(person) // Метод call похож на bind, но он сразу вызывает функцию


// logger.withParams.call(person, true, true, true)
// logger.withParams.apply(person, [true, true, true])
//!========================================================================================================================================================
