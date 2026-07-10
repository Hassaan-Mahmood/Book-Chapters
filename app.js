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

