// ================== Chapter 24 =======================
// ==== Strings: Finding a character at a location =====

// var firstName = "Hassaan";
// var LastName = "Mahmood";
// var fullName = firstName + " " + LastName;

// var firstChar = firstName.slice(0, 1);
// var firstChar = firstName.charAt(0);
// console.log(firstChar);
// var LastChar = fullName.charAt(fullName.length -1);
// console.log(LastChar);

// let text = "Hello World! This is a test string.";
// for (let i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!") {
//         console.log("Exclamation mark found at index: " + i);
//         break;
//     }
// }

// ================== Chapter 25 =======================
// ======= Strings: Replacing characters ===============

// let text = "Hello World! This is a test string.";
// for (let i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 5) === "World") {
//     text = text.slice(0, i) + "Universe" + text.slice(i + 5);
//   }
// }
// console.log(text);

// let text = "World War II was a global war that lasted from 1939 to 1945.";
// let firstChar = text.indexOf("World War II");
// console.log(firstChar);
// if (firstChar !== -1) {
//   text =
//     text.slice(0, firstChar) +
//     "the Second World War" +
//     text.slice(firstChar + 12);
// }
// console.log(text);

// let text = "World War II was a global war that lasted from 1939 to 1945.";
// let newText = text.replace("World War II", "the Second World War");
// console.log(newText);

// text = text.replace("World War II", "the Second World War")

// let text = "World War II was a global war that lasted from 1939 to 1945. World War II was a devastating conflict.";
// let newText = text.replace(/World War II/g, "the Second World War");
// console.log(newText);

// =============================
// JavaScript Math Methods
// =============================

// ---------- Properties ----------
console.log("Math.PI =", Math.PI);
console.log("Math.E =", Math.E);
console.log("Math.LN2 =", Math.LN2);
console.log("Math.LN10 =", Math.LN10);
console.log("Math.LOG2E =", Math.LOG2E);
console.log("Math.LOG10E =", Math.LOG10E);
console.log("Math.SQRT2 =", Math.SQRT2);
console.log("Math.SQRT1_2 =", Math.SQRT1_2);

// ---------- abs() ----------
console.log(Math.abs(-20)); // 20

// ---------- ceil() ----------
console.log(Math.ceil(4.2)); // 5

// ---------- floor() ----------
console.log(Math.floor(4.9)); // 4

// ---------- round() ----------
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

// ---------- trunc() ----------
console.log(Math.trunc(4.99)); // 4

// ---------- random() ----------
console.log(Math.random()); // Random number between 0 and 1

// ---------- Random Integer (1-10) ----------
console.log(Math.floor(Math.random() * 10) + 1);

// ---------- max() ----------
console.log(Math.max(10, 20, 30, 40)); // 40

// ---------- min() ----------
console.log(Math.min(10, 20, 30, 40)); // 10

// ---------- pow() ----------
console.log(Math.pow(2, 3)); // 8

// ---------- Exponent Operator ----------
console.log(2 ** 3); // 8

// ================== Chapter 26 =======================
// ======= Strings: Replacing characters ===============

// let number = Math.random();
// let num1 = Math.round(4.5);
// let num2 = Math.ceil(4.1);
// let num3 = Math.floor(4.1);
// console.log(num1);
// console.log(Math.round(-4.2));
// console.log(Math.round(-4.2));

// let score = 4.7;
// let rounded = Math.round(score);
// console.log(score);

// let rounded = Math.round(score);let score = 4.7;

// score = Math.round(score);

// console.log(score);

// console.log(Math.round(8.76));

// Math.ceil(number)

// Math.ceil(number)

// Math.ceil(number)

console.log(Math.ceil(-2.3));
console.log(Math.ceil(-2.3));
console.log(Math.floor(3.9));
console.log(Math.floor(3.1));
console.log(Math.floor(3.9999));
console.log(Math.floor(-3.9));

let rating = 4.7;
let stars = Math.round(rating);
console.log(stars);

let rating = 4.7;
let stars = Math.round(rating);
console.log(stars);

let price = 99.01;
console.log(Math.ceil(price));

let age = 18.99;

console.log(Math.floor(age));

let age = 18.99;

console.log(Math.floor(age));

console.log(Math.trunc(-4.9));

console.log(Math.trunc(-4.9));

console.log(Math.max(10, 25, 8, 40));




// Class Code
// var currentDate = new Date();
// console.log(currentDate)

// let userCurrentDay = new Date();
// let userNumber = prompt(userCurrentDay);
// console.log(userNumber);

// let arr1 = [0, 1, 2, 3, 4, 5, 6];
// // arr1 = new Date();
// arr1 = new Date
// console.log(arr1)

// let currentDate = new Date();
// console.log(currentDate);

// let currentDate = new Date();
// let second = currentDate.getTime() / 1000;
// let minute = second / 60;
// let hour = minute / 60;
// let day = hour / 24;
// let month = day / 30;
// let year = month / 12;
// console.log(Math.round(year));

// let judgementDay = new Date("Jan 1, 3000").getTime();
// let today = new Date().getTime();

// let remainingDays = judgementDay - today;
// let convertIntoDays = remainingDays / 1000 / 60 / 60 / 24 ;

// console.log(convertIntoDays)
// console.log(judgementDay);
// console.log(today);

// let birthDay = new Date("July 28, 2004").getTime();
// let today = new Date().getTime();

// let spentDays = today - birthDay;
// let convertIntoDays = spentDays / 1000 / 60 / 60 / 24;
// console.log(convertIntoDays)

// function greet (){
//     console.log("Hello");
//     console.log("Hello");
// }

// setInterval(greet, 10);
// setInterval(greet(), 1000);



// ================ Date Mathod ================ //

// Create a Date object
let date = new Date();

// 1. getFullYear() - Returns the year
console.log(date.getFullYear());

// 2. getMonth() - Returns the month (0 = January, 11 = December)
console.log(date.getMonth());

// 3. getDate() - Returns the day of the month (1-31)
console.log(date.getDate());

// 4. getDay() - Returns the day of the week (0 = Sunday, 6 = Saturday)
console.log(date.getDay());

// 5. getHours() - Returns the current hour (0-23)
console.log(date.getHours());

// 6. getMinutes() - Returns the current minutes (0-59)
console.log(date.getMinutes());

// 7. getSeconds() - Returns the current seconds (0-59)
console.log(date.getSeconds());

// 8. getMilliseconds() - Returns the current milliseconds (0-999)
console.log(date.getMilliseconds());

// 9. getTime() - Returns milliseconds since January 1, 1970
console.log(date.getTime());

// 10. toLocaleDateString() - Returns the date in local format
console.log(date.toLocaleDateString());