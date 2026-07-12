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
