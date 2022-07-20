// Objects

const person = {
   name: 'Ruslan',
   age : 22,
   isProgrammer: true,
   languages: ['ru', 'en', 'by'],
   'complex key': 'Complex key',
   ['key_' + (1+3)] : 'Computed key', // key__4
   greet() {
      console.log('Greet from person');
   }
}

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
