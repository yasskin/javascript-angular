var number: number;
var otherNumber: number;

number = parseInt(prompt('please enter a number.'));
otherNumber = parseInt(prompt('enter another number'));
var sum = number + otherNumber;
alert("The sum of your two numbers is: " + sum);

var findSum = function(first: number, second: number) {
  var sum = first + second;
  alert("The sum of your two numbers is: " + sum);
}

var number = parseInt(prompt('please enter a number.'));
var otherNumber = parseInt(prompt('enter another number.'));
findSum(number, otherNumber);
