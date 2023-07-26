'use strict'

// let firstName = "Javharbek",
//    age = 2023 - 1951 + 45,
//    isMerried = true;

// alert(firstName);
// alert(age);
// alert(isMerried);

// const PI = 3.14;
// const BORN_YEAR = 2004;

// console.log(firstName);
// console.log(age);
// console.log(isMerried);

// console.log(BORN_YEAR);

// let admin, name;

// name = "John";
// admin = name;

// console.log(admin);


// const EARTH = 'yer';
// let earth = EARTH;

// console.log(EARTH, earth);

// earth = "mars";

// console.log(EARTH, earth);


// let a = "text";

// console.log(typeof a);

// a = 5412;

// console.log(typeof a);

// a = true;

// console.log(typeof a);

// a = undefined;

// console.log(typeof a);


/* Primative Data Types */

/// 1. Number
// (-2^53, 2^53)

// let number = 78;
// console.log(typeof number, number);

// number = 0.5;
// console.log(typeof number, number);

// // number = Infinity;
// // console.log(typeof number, number);

// number = NaN ** 2; // Not a Number
// console.log(typeof number, number); 

/// 2. BigInt

// let num = 900n;
// num = num + 5n;

// console.log(typeof num, num);


/// 3. String

// let textFirst = "text 1";
// let textSecond = 'text 2';
// let textThird = `a`;

// console.log(typeof textFirst, textFirst);
// console.log(typeof textSecond, textSecond);
// console.log(typeof textThird, textThird);

// let user = "Javharbek Yuldashev";
// let greeting = "Assalomu alaykum, " + user + "! \nTanishganimdan xursabdman"; 

// console.log(greeting);

// let greetingSecond = `Assalomu alatkum, ${user}! \nTanishganimdan xursandman`;

// console.log(greetingSecond);

/// 4. Boolen

// let isMerried = false;
// let isBoy = true;

// console.log(isMerried);

/// 5. Undefined

// let a;

// console.log("Qiymati: ", a);
// console.log("Turi: ", typeof a);

/// 6. Null

// let a  = null;

// console.log("Qiymati: ", a );
// console.log("Turi: ", typeof a);

// a = 5;

// console.log("Turi: ", typeof a);


/// 7. Symbol

// let a = Symbol(5);

// console.log("Qiymati: ", a );
// console.log("Turi: ", typeof a);

/* Complecated Data Type */

/// Object

// let person = {
//   user: "Javharbek",
//   age: 100,
//   isMerried: true
// }

// console.log("qiymat: ", person);
// console.log("turi: ", typeof person);

//////////////////////////////////////////////////

/// alert - bildirishnoma

// alert("Bu sayt test rejimida ishlamoqda");

// /// prompt - ma'lumot qabul qilish

// let user = prompt(`Ismingizni kiriting?`);

// alert(`Assalomu alaykum ${user}`);

// /// confirm - tasdiqlash (ha / yo'q)

// let isLiked = confirm("Saytimiz sizga yoqdimi ?");

// console.log(isLiked);


///////// Type Conversion \\\\\\\\\\

//// => Stirng

// let num = 45;

// console.log(typeof num);

// num = String(num);

// console.log(typeof num);


// let isTrue = true;

// console.log(typeof isTrue);

// isTrue = String(isTrue);

// console.log(typeof isTrue);

//// => Number

// let text = '45';

// console.log(typeof text);

// text = Number(text);

// console.log(typeof text);15

// // 2

// let num = prompt("Son kiriting: ");

// console.log(num*1 + 5);

// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0
// alert( Number(undefined) );       // NaN
// alert( Number(null) );       // 0

//// => Boolean

// let num = 12;
// let zero = 0;
// let minus = -1;
// let text = "old";
// let emptyText = "";
// let und; // undefined
// let nothing = null;

// console.log("num", Boolean(num));
// console.log("zero",Boolean(zero));
// console.log("minus",Boolean(minus));
// console.log("text", Boolean(text));
// console.log("emptyText", Boolean(emptyText));
// console.log("undefined", Boolean(und));
// console.log("null", Boolean(nothing));


// unary
// let x = -1;
// x = -x;

// console.log(x);

// // binary

// let y = 5, z = 7;
// let t = y * z;

// console.log(t);


// // operand: x, y, z

/*
// Math

// +
console.log(5 + 7);

// - 
console.log(7 - 4 + 5);


// *
console.log(4 * 1.5);

// /
console.log(8 / 4);
console.log(9 / 4);
console.log('ac'/ 2);

// % - qoldiq
console.log(15 % 6);
console.log(15 % 6.5);


// Uch xonali son o'rtasini aniqlash

// let num = Number(prompt("Son kiritng"));
// console.log(typeof num);

// let middleFirst = (num % 100 - num % 10) / 10;
// let middleSecond = (num - num % 10) / 10 % 10;

// console.log(middleFirst, middleSecond);

// ** - daraja

console.log(5 ** 3);
console.log(16 ** 0.5);
console.log(27 ** (1/3));

*/


/// String with "+" (binary)

console.log("aka" + " uka"); // aka uka
console.log("aka" + " 5"); // aka 5
console.log("aka" + 5); // aka5
console.log(3 + " uka"); // 3 uka
console.log(3 + 5); // 8

console.log("aka" + 5 + 3); // aka53
console.log(3 + 5 + " uka"); // 8 uka

console.log("aka" - 3); // NaN
console.log("aka" * 2); // NaN
console.log("aka" / 4); // NaN
console.log("aka" * " uka"); // NaN
console.log("aka" ** 4); // NaN
console.log("aka" ** 0); // 1

console.log('1' + 2 * 2); // 14
console.log(('1' + 2) * 2); // 24
console.log(6 - '24'); // -18
console.log(6 - '24a'); // NaN








