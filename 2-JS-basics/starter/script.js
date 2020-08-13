// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var  job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// var $3years = 3;
// var johnMark = 'John  and Mark';
// var  if = 23;


/***************************************************
 * Variable mutations and type coercion
 */

// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job =  'teacher';
// isMarried = false;

// console.log(firstName  + ' is a ' + age + ' year old' + ' ' + job + '. Is he married?' + ' ' + isMarried);

// //Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old' + ' ' + job + '. Is he married?' + ' ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

/*********************************
 * Basic operators
 */

// var year, yearJohn, yearMark;
// now = 2020;
// ageJohn = 28;
// ageMark =  33;


// //Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now +  2);
// console.log(now  * 2);
// console.log(now /  10);


// // Logical opereators
// var johnOlder =  ageJohn < ageMark;
// console.log(johnOlder);


// // typeof  operators
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeeof x);

/**************************************
 * Operator precedence
 */

// var now =  2018;
// var yearJohn  = 1989;
// var fullAge = 18;

// // Multiple Factors
// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// //  Multiple assignments

// var x, y;
// x = y = (3  + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 //  26
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x +=10;
// console.log(x);
// x++;
// console.log(x);

/***
 * Coding Challenge
 */

// var markMass = 78; //kg
// var markHeight = 1.69; //meters

// var johnMass = 92;
// var johnHeight = 1.92;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(markBMI, johnBMI);

// var markHigherBMI = markBMI > johnBMI;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

/************************************
 * If / else statements
 */

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefylly marry soon! :)');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefylly marry soon! :)');
// }

// var markMass = 78; //kg
// var markHeight = 1.69; //meters

// var johnMass = 92;
// var johnHeight = 1.92;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// if (markBMI > johnBMI) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// }

// Do this ^ rather than this below
// var markHigherBMI = markBMI > johnBMI;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

/********************************
 * Boolean Logic
 */

//  var firstName = 'John';
//  var age = 20;

//  if (age < 13) {
//      console.log(firstName + ' is a boy.');
//  } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
//  } else if (age >= 20 && age < 30) {
//      console.log(' John is a young man.');
//  } else {
//      console.log(firstName + ' is a man.');
//  }

 /*********************************************
  * The Ternary Operator and Switch Statements
  */

// var firstName = 'John';
// var age = 14;

// // Ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

//Switch statements
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kid how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// //rewritten if-else statment from above as a switch statement

// age = 56;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }

/*************************************
 * Truthy and falsy values and equality  operators
 */

 //falsy values: undefined, null, 0, '', NaN
 //truthy values: NOT falsy values

 var height;

height = '';

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');
}