// console.log("Hello World");

// alert("Hello world");

// document.getElementById("title").innerHTML = "Hello, This is a JS Tutorial";

// document.write("Hello");

// let a = typeof 7;
// console.log(a);

// let b = typeof [1,2,3,4,5];
// console.log(b);

// let c = typeof "hello";
// console.log(c);

// let d = typeof {
//     "a" : 5,
//     "b" : 4
// };
// console.log(d);


// let sum = 0;
// for (let num = 0; num <= 100; num++) {
//     if (num % 2 == 0) {
//         sum = sum + num;
//     }
// }
// document.write(sum);


// let num1 = prompt("Enter a number :", 2);
// for (let num2 = 1; num2 <= 10; num2++) {
//     total = num1 * num2;
//     document.write(num1 + "*" + num2 + "=" + total + "<br>");
// }


// let a = 7 + "hello";
// let b = 7 + null;
// let c = 7 + true;
// let d = "hello" + 7;
// let e = "hello" + null;
// let f = "hello" + true;
// 
// document.write(typeof a + "<br>");
// document.write(typeof b + "<br>");
// document.write(typeof c + "<br>");
// document.write(typeof d + "<br>");
// document.write(typeof e + "<br>");
// document.write(typeof f + "<br>");


// let a = 41;
// let b = "hello";
// let c = true;
// // check veriable type
// document.write(typeof a + "<br>")
// document.write(typeof b + "<br>")
// document.write(typeof c + "<br>")
// // convert veriable type in number
// document.write(Number(a) + "<br>")
// document.write(Number(b) + "<br>")
// document.write(Number(c) + "<br>")
// // convert veriable type in string
// document.write(String(a) + "<br>")
// document.write(String(b) + "<br>")
// document.write(String(c) + "<br>")
// // convert veriable type in boolean
// document.write(Boolean(a) + "<br>")
// document.write(Boolean(b) + "<br>")
// document.write(Boolean(c) + "<br>")


// let str = "This is a JavaScript Tutorial.";
// let str2 = "This is a good Tutorial.";
// let str3 = str.concat(str2)  // join two strings using "concat()" string function
// //
// document.write(str + "<br>");
// document.write(str2 + "<br>");
// document.write(str3 + "<br>");
// document.write(str3.substring(10,15) + "<br>"); // print substring from string str3 using "substring(start index , end index + 1)" string function
// document.write(str3.substr(10,5) + "<br>"); // print substring from string str3 using "substr(start index , length)" string function 
// //
// // String function "trim()" use for remove space before and after a string
// // String function "trimStart()" use for remove space before a string
// // String function "trimEnd()" use for remove space after a string
// //
// document.write(str3.toLowerCase() + "<br>");
// document.write(str3.toUpperCase() + "<br>");
// document.write(str3.replace("a good","the best") + "<br>");
// document.write(str3.includes("JavaScript") + "<br>"); // String function "includes()" return "true" if searchString is present in String else return "false"


// let num = [1,2,3,4,5,6,7,8,9,10];
// 
// for (let i = 0; i < num.length; i++) {
//     document.write(num[i] + "<br>") 
// }
// 
// for (let i = 0; i < num.length; i++) {
//     if (i == 7) {
//         break;
//     }
//     document.write(num[i] + "<br>"); 
// }


// let num1 = prompt("Enter a number :", 2);
// function MulTable(num1) {
//     for (let num2 = 1; num2 <= 10; num2++) {
//         total = num1 * num2;
//         document.write(num1 + "*" + num2 + "=" + total + "<br>");
//     }
// }
// MulTable();


// // arguments object
// let sum = 0;
// function summ(){
//     arguments; // stored parameters in array
//     if(arguments.length == 0){
//         document.write("No argument passed");
//         document.write("<br>");
//     }else{
//         for(let i = 0; i < arguments.length; i++) {
//             sum = sum + arguments[0];
//         }
//         document.write(sum + "<br>");
//     }
// }
// // summ();
// // summ(1);
// // summ(1,2);
// // summ(1,2,3);
// // summ(1,2,3,4);
// // summ(1,2,3,4,5);
// // We can store a function in variable (example:- "let add = summ") then we can call function using variable (example:- "add(1,2)")  
// let add = summ;
// add();
// add(1);
// add(1,2);
// add(1,2,3);
// add(1,2,3,4);
// add(1,2,3,4,5);


// // Anonymous function - "we can create a function in variable with or without provide a function name"
// //we can called as a "Function expression" - "when we can create a function in variable"
// let MulTable = function (num1) {
//     for (let num2 = 1; num2 <= 10; num2++) {
//         total = num1 * num2;
//         document.write(num1 + "*" + num2 + "=" + total + "<br>");
//     }
// }
// MulTable(78);


// //Immediately Invoked Function - "we can create a function and then immediately automatically call a function"
// (function (num1) {
//     for (let num2 = 1; num2 <= 10; num2++) {
//         total = num1 * num2;
//         document.write(num1 + "*" + num2 + "=" + total + "<br>");
//     }
// })(6);


