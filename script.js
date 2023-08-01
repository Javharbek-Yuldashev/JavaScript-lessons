"use strict";

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

// let num = +prompt("Son kiritng");
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
/*
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
*/

// Numeric with "+" (unary)
/*
let x = 1;

console.log(+x); // no effect: 1
console.log(-x); // changed: -1
console.log(+"a"); // changed: NaN
console.log(+"2"); // changed: 2
console.log(+true); // changed: 1
console.log(+false); // changed: 0
console.log(+undefined); // changed: NaN
console.log(+null); // changed: 0

console.log("2" + "3"); // 23
console.log("2" + +"3"); // 23
console.log(+"2" + +"3"); // 5 == Number("2") + Number("3")

*/

////// Assignment

/// (=)
/*

// qiymat berish
let num = 5;
console.log(num); //5

// qiymat qaytarish
let a = 1;
let b = 3;
let num2 = 5 - (a = b + 1); // 1) b + 1 = 4 2) a = 4 3) 5 - a = 1

console.log(a); // 4
console.log(num2); // 1

// qiymat o'zgartirish

let c, d;

console.log(c, d); // undefined undefined

c = d = 5; // 1) d = 5 2) c = d

console.log(c, d); // 5 5

// o'ziga bogliq holda qiymat o'zgarirish

let x = 5;

x += 2; // x = x + 2; // 5 + 2 = 7
x -= 2; // x = x - 2; // 7 - 2 = 5
x *= 2; // x = x * 2; // 5 * 2 = 10
x /= 2; // x = x / 2; // 10 / 2 = 5
x %= 2; // x = x % 2; // 5 % 2 = 1
x **= 2; // x = x ** 2; // 1 ** 2 = 1

console.log("x = ", x);

x *= 5 + 3; // x = x * (5 + 3);

console.log("x = ", x);

// increment - 1 ga oshirish

let y = 5;

y++; // y = y + 1;
++y; // y = 1 + y;

console.log(y); // 7

// decrement - 1 ga kamaytirish

let z = 11;

--z; // z = z - 1;
z--; // z = z - 1;

console.log(z); // 9

console.log(5 + ++y); // 13
console.log(5 + z++); // 14

*/

//

//////// Comparisons - Taqqoslmamalar \\\\\\\\

/*
// > - katta
// < - kichik
// >= - katta yoki teng
// <= - kichik yoki teng

// = - ! taqqoslash emas, qiymat berish
// == - tenglikka taqqoslash
// != - teng emaslikka taqqoslash

console.log(2 > 3); // false 
console.log(2 < 3); // true 

console.log(5 >= 3); // true 
console.log(5 >= 8); // false 
console.log(5 >= 5); // true 

console.log(8 == 6); // false
console.log(8 == 8); // true
console.log(8 != 4); // true

let a = (10 > 9);
console.log(typeof a, a);
*/

/// String comparisons
/*
// Unicode TaBLE => A = 65 ....   a = 97 ...  
// yoki alfavit boyicha => 1 2 ... A B ... a b

console.log("ABC" == "ABC"); // true
console.log("ABC" == "abc"); // false
console.log("ABC" > "abc"); // false
console.log("ABC" < "abc"); // true
console.log("ABC" < "ABc"); // true
console.log("aBC" < "ABc"); // false
console.log("AB" < "ABC"); // true

console.log("BAG" > "SAD"); // B > S => false
console.log("Bag" < "sAD"); // B < s => true

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true
*/

/// Turli ma'lumot turlarini taqqoslash

/*
  Bunda har xil bo'lgam ma'lumot turlari 
  Number ma'lumot turiga o'tkazib taqqoslanadi
*/
/*
console.log("24" > 5); // 24 > 5 => true;
console.log("04" < 1); // 4 < 1 => false;

console.log("4a" < 3); // NaN < 3 => false;
console.log("4a" > 3); // NaN < 3 => false;
console.log("4a" == 3); // NaN < 3 => false;
console.log("4a" != 3); // NaN < 3 => true;

console.log(true < "15"); // 1 < 15 => true;
console.log(true < false); // 1 < 0 => false;

let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // 0 == 0 => true

// Qat'iy  tenglik => (===) - bu ma'lumot turi 
//                        bilan bilan birgalikda
//                        tekshiradi

console.log(0 == '0'); // 0 == 0 => true
console.log(0 === '0'); // 0 == "0" => false
console.log(0 != '0'); // 0 != "0" => false
console.log(0 !== '0'); // 0 !== "0" => true
console.log(0 == false); // 0 == 0 => true
console.log(0 === false); // 0 === false => false

console.log("str" === "text"); // false
console.log("str" !== "text"); // true

*/
/// null va undefined
/*
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log("" == 0); // 0 == 0 => true
console.log("0" == 0); // 0 == 0 => true

console.log(+null); // 0
console.log(+undefined); // NaN

console.log(null == 0); // => false
console.log(undefined == NaN); // false

console.log(null == 0); // flase
console.log(null > 0); // flase
console.log(null >= 0); // true

console.log( undefined > 0 ); // false 
console.log( undefined < 0 ); // false 
console.log( undefined == 0 ); // false 

console.log(null == "\n0\n"); // false
*/

/////// Conditional satements \\\\\\\\

// If(...) {}
/*
let age = 18;

if (age >= 18) {
  console.log("Sen balog'atga yetgansan");
}

// if(...) { } else {}

let birthYear = 2006;

if(2023 - birthYear >= 18) {
  console.log("Haydovchilik guvohnomasini olishingiz mumkin");
} else {
  let age = 2023 - birthYear;
  console.log(`Haydovchilik guvohnomasini olishga hali ${18 - age} yil bor`);
}

let a = 8, b = 9;

if(a > b) {
  console.log(`Kattasi: ${a}`);
} else {
  console.log(`Kattasi: ${b}`);
}

// if() ... else if() ... ....  ... else {}

let son = +prompt('Son kiriting: ');

if (son > 0) {
  console.log("Musbat son");
} else if (son < 0) {
  console.log("Manfiy son");
} else {
  console.log("Nol");
}



/// Conditional operrator  => ? (ternary)

// (shart) ? "1-holat" : "2-holat";
// agar shart to'g'ri bo'lsa => 1-holat
// agar shart noto'g'ri bo'lsa => 2-holat

let numOne = +prompt('Son kiriting: ');
let numTwo = +prompt('Son kiriting: ');

// if statement
/*
let minNum;

if(numOne < numTwo) {
   minNum = numOne;
} else {
   minNum = numTwo;
}
*/
/*
let minNum = (numOne < numTwo) ? numOne : numTwo;

console.log(minNum);


// Bir necha ? operators

let age = prompt('age?', 18);

let message = (age <= 0) ? "Didn't born" :
  (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
*/


// Boolean conversion 

// if(0) { //  0 bu falsy qiyamt
//   console.log(true);
// } else {
//   console.log(false);
// }

// False values:

/*
  1) false
  2) undefined
  3) 0
  4) ""
  5) Null
  6) NaN
*/

// let isBig = (12 > 15); // false

// if(isBig) console.log("Ha katta");
// else console.log("Yoq kichik");


//////////// Logical operators \\\\\\\\\\\\\\\\
/////////// Mantiqiy opertorlar \\\\\\\\\\\\\\\\

// Or: ||
// And: &&
// Not: !
// Nullish: ??

// OR => ||

// with boolean values
/*
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let hour = 12;
hour = 20.30

if(hour <= 8 || hour >= 20) { // 20.3 <= 8 || 20.3 >= 20 => false || true => true
  console.log("do'konimiz yopiq");
} else {
  console.log("do'konimiz ochiq");
}

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) { // true
  console.log('The office is closed.' ); // it is the weekend
}

// not boolean values

// falsy values: 0, "", undefined, NaN, Null, false

console.log(undefined || null); // null
console.log(5 || null); // 5
console.log(undefined || 5 || null); // 5
console.log(undefined || NaN || null || ""); // ""
console.log(undefined || NaN || "0" || null || ""); // "0"
console.log(undefined || NaN || "" || null ); // null

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anymous"); // "SuperCoder"
//             ""     ||    ""    || "SuperCoder" || "Anymous" =>  "SuperCoder"


let user = undefined || firstName || "Anymous";

console.log(user); // "Anymous"

// Short-circuit (if vs ||)

true || alert("not printed"); // alert ishlamadi
false || alert("printed"); // alert ishaldi

*/

// And => &&
/*
console.log(false && false); // false
console.log(false && true); // flase
console.log(true && false); // flase
console.log(true && true); // true

let hour = 12;

// [8; 20] => 8 <= hour <= 20
if(hour >= 8 && hour <= 20) { // 12 >= 8 && 12 <= 20 => true && true => true
  console.log("Do'konimiz ochiq");
} else {
  console.log("Do'konimiz yoqip");
}

// // (-..., 8) yoki (20, ...)
// if(hour <= 8 || hour >= 20) { // 20.3 <= 8 || 20.3 >= 20 => false || true => true
//   console.log("do'konimiz yopiq");
// } else {
//   console.log("do'konimiz ochiq");
// }

let minute = 30;

if (hour == 12 && minute == 30) {
  console.log('The time is 12:30' );
}

// not boolen values

console.log(12 && "me" && undefined); // undefined
console.log(12 && "me" && true); // true
console.log(12 && null && "me" && undefined); // null

let value = 1 && 2 && null && 3;
console.log(value); // null

// || vs &&

let a = true, b = true, c = false, d = true;

console.log(a && b || c && d); // (a && b) || (c && d) => true


// if vs && 

let x = 1;

// if(x > 0) {
//   console.log("x musbat son");
// }

(x > 0) && console.log("x musbat son");


/// Not (!) - inkor

console.log(!false); // true
console.log(!true); // false
console.log(!undefined); // true
console.log(!"0"); // flase

// double NOT => !!

// !! == Boolean()

console.log(!null); // true
console.log(!!null); // false
console.log(Boolean(null)); // false
*/

alert( null || 2 && 3 || 4 );







