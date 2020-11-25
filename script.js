//Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2) {
	return num1 + num2
	}
  var result = sum;
console.log(sum(10, 19))
//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function greatestNum(num1,num2,num3){
  return Math.max(num1, num2, num3);
}
console.log(greatestNum(17, 108, 28))
//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function isEven(num1) {
  var isNum = Number.isFinite(num1);
  if (!isNum) {
    return false;
  }
  if (num1 % 2 == 0) return "even";
  else return "odd";
}
console.log(isEven(17));
console.log(isEven(108));  
//Write a function that accepts a string as a parameter. 
function stringLength(string) {
  if (string.length <= 20) {
    return string.concat(string)
  } else {
    var index = string.length / 2;
    return string.slice(0, index);
  }
}
console.log(stringLength("Bippity Boppity "));
console.log(stringLength("Bippity Boppity Boo!!!"));
//Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
function fibonacci(n) {
  var num1 = 1; 
  var num2 = 1; 
  var next;
  var sum = 0;
  for (var i = 0; i < n; i++) {
    console.log(num1);
    sum = sum + num1;
    next = num1 + num2; 
    num1 = num2; 
    num2 = next; 
  } 
  return sum;
}
fibonacci(12);
//Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.
function frequent(string) {
  var arr = string.split('');
  var callback = (acc,char) => {
  var len = string.split(char).length - 1;
  return len > acc[1] ? [char,len] : acc;
  }
  var initialValue = ['', 0];
  return arr.reduce(callback, initialValue)[0];
}
console.log(frequent("Bippity Boppity Boo"));