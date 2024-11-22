//...........................DAY 4 ...............................//

// let num = -5;
// if (num > 0) {
//   console.log("The number is positive.");
// } else if (num < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }


// let numbers = -5;
// if (numbers > 0) {
//   console.log("The number is positive.");
// }
// if (numbers < 0) {
//   console.log("The number is negative.");
// }
// if (numbers === 0) {
//   console.log("The number is zero.");
// }



// let age = 18;
//  if(age >= 18){
//     console.log("you are eligible for driving lisence");
//  }
//  if(age < 18){
//     console.log("you are not eligible for driving lisence");
//  }




// let day = 4;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }
// console.log(dayName);


// function sum(){
//     for (let i = 1; i <= 5; i++) {
//         console.log("Iteration: " + i);
//     }
// }
// sum();


// let add = 0;
// for (let i = 1; i <= 10; i++) {
//   add += i;
//   console.log("when the value of i is" + i, "then the sum is" + add);
// }
// console.log("The sum of numbers from 1 to 10 is: " + add);



// let number =2
// for(let k=1; k<=10; k++){
//     console.log(`${number} X ${k} = ${number * k}`)
// }




// let j = 1;
// while (j <= 50) {
//   console.log("Iteration: " + j);
//   console.log(j);
//   j += 2;
// }


// let i = 1;
// do {
//   console.log("Iteration: " + i);
//   i++;
// } while (i <= 5);



// let numb = 4;
// let res = (number % 2 === 0) ? "Even" : "Odd";
// console.log("The number is: " + res);


// let num1 = 10;
// let num2 = 20;
// let result;
// try {
//     if (num2 === 0) {
//         throw new Error("Cannot divide by zero");
//     }
//         result = num1 / num2;
//     } 
// catch (error) {
//     console.log("Error: " + error.message);  
//     } 
//     console.log("Result: " + result);  


// for (let i = 0; i < 50; i++) {
//     if (i % 7 === 0) {
//       console.log(i + " is divisible by 7");
//       continue;
//     }
//   }
  

// for(i=0; i<50; i++){
//     if(i%7 == 0){
//         console.log("the first number is divisible by 7 is" +i);
//         break;
//     }
// }



//...........................DAY 5 ...............................//

// Function

function Greet(){
  console.log("hello");
}
Greet();

function sum(a,b){
  let c = a+b;
  console.log(c);
}
sum(4,5);

const sub = (d,e) => {
  let f = d-e;
  console.log(f);
}
sub(9,4);

const multiply = (g,h) => {
  let i = g * h;
  console.log(i);
}
multiply(5,8);

const multiply2 = (j,k) =>  j * k; 
console.log(multiply2(9,3))

const divide = (l,m) => l / m; 
console.log(divide(9,3))

const modulus = (o,p) => o % p; 
console.log(modulus(9,3))

const modulus2 = (o,p) => o % p ===0; 
console.log(modulus2(9,3))

// Clousers

function printSum(){
  let a = 10;
  let b = 12;
  return () => {
          let c= a + b;
          console.log(c);
      } 
} 
const Sum = printSum();
Sum();



function Outer() {
  let y = 10;
  function inner() {
      console.log(y);
  }
  inner();
}
Outer();


const createCounter = () =>{
  let count = 7;
  return {
      increment: () => ++count,
      decrement: () => --count,
      getCount: () => count
  };
};
const Counter = createCounter();

console.log(Counter.getCount())
console.log(Counter.getCount())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.decrement())
console.log(Counter.getCount())

