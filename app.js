// Числа (Number)

// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3 // Возводим в третью степень
// console.log(num);
// console.log(float);
// console.log(pow);

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
// console.log('Math.pow', Math.pow(2, 53) -1);
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
// console.log('MAX_VALUE', Number.MAX_VALUE);
// console.log('MIN_VALUE', Number.MIN_VALUE);
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);
// console.log('1 / 0', 2 / 0); // Infinite
// console.log(Number.NaN); // Not A Number
// console.log(typeof NaN); // type = Number
// console.log(2 / undefined); // NaN
// const weird = 2 / undefined; // NaN
// console.log(Number.isNaN(weird)); // True
// console.log(Number.isNaN(42)); // False
// console.log(Number.isFinite(Infinity)); // Конечна ли бесконечность - False
// console.log(Number.isFinite(42)); // Конечно ли 42 - True

// const stringInt = '40';
// const stringFloat = '40.42';
// console.log(Number.parseInt(stringInt) + 2); // 42
// console.log(parseInt(stringInt) + 2); // 42
// console.log(Number(stringInt) + 2); // 42
// console.log(+stringInt + 2); // 42

// console.log(parseInt(stringFloat) + 2); // 42
// console.log(parseFloat(stringFloat) + 2); // 42.42
// console.log(+stringFloat + 2); // 42.42

//!========================================================================================================================================================

// Сложение дробных частей 
// console.log(0.4 + 0.2); // 0.6000000000000001
// console.log((2 / 5) + (1 / 5)); // 0.6000000000000001
// console.log((0.4  + 0.2).toFixed(4)); // 0.6000 (STRING) Просто вырезает остальные значения
// console.log(+(0.4  + 0.2).toFixed(1)); // 0.6
// console.log(parseFloat((0.4  + 0.2).toFixed(1))); // 0.6
//!========================================================================================================================================================

// BigInt
console.log(9007199254740991999999n - 90071992547409919999n);
console.log(-9007199254740991999999n - 90071992547409919999n);
// console.log(-9007199254740991999999n - 90071992547409919999.223n); // err

// console.log(10n - 4); // err
// console.log(parseInt(10n) - 4); // 6
// console.log(10n - BigInt(4)); // 6n
// console.log(5n / 2n); // 2n
//!========================================================================================================================================================
