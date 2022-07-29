// This is a comment

// Variable's and values
var name = "Dominic"; // string literal
var age = 20; // number literal
var isApproves = false; // boolean Literal
var firstName = undefined;
var selectColor = null;

// Arrays

// Arrays ar started with square braces []
var list = ["john", "Marry", "Sander"];

//There are other methods to start an Array

list2 = ["john", "Marry", "Sander"];
list3 = new Array("john", "Marry", "Sander");

// You can accsess item in the array with its index number

list2[2]; // This will return Sander as result

// There are different methods with wich you can modifie your array
list.length; // returns the length of the array
list.push(2); // adds the value to the end of the array
list.pop(); // removes the last item in the array
list.shift(); // removes the first item in the array
list.unshift(); // adds an item to the front of the array
list.indexOf(); // returns the index of the given value

// Objects

// Objects use curly brackets instead of square brackets
var person = new Object();
car = {};

person.name = "Dominic";
person.age = 25;
person.height = 1.68;
person.married = false;

// You can accsess the values with square brackets and the name of the value
person["name"];
// But its easyier to accsess it with the dot operator
person.name;
// If you want to chance a given property you can use the square brackets and assign a new value
person["name"] = "Tim";

var isTimFittToday = new Object();
isTimFittToday.ShouldHeGoToSleep = "Yes";

// Operators

// Arithmetic Operators
y = y + x; // Addition
y = y - x; // Subtraction
y = y * x; // Multiplication
y = y ** x; // Exponential
y = y / x; // Division
y = y % x; // Modulo, the remainder of a Division
y = y++; // Increment
y = y--; // Decrement

//Assignment Operators
y = x; // Assign
y += x; // Add and Assign
y -= x; // Subtract and Assign
y *= x; // Multiply and Assign
y **= x; // Exponent Assign
y /= x; // Divide and Assign
y %= x; // Modulo and Assign

// Comparison Operator

y == x; // Equal to
y > x; // Greater than
y < x; // Smaller than
y != x; // Not Equal
y && x; // and
y || x; // or

// If statement

// if statement checks a if a condition is met when its not met we can go one with else or else if
var age = 25;
if (age >= 25) {
  console.log("You are an Adult");
} else {
  console.log("You are not an Adult");
}

// For loop

// a for loop executes a set number of time or untill a condition is met
// FizzBuzz
for (i = 100; i < 100; ++i) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// do while is always exeecuted once
var x = 0;
do {
  console.log(names[x]);
  x++;
} while (x < names.lenght);

// Functions

//A function is like a programm inside a programm that can be called and will execute whatever is inside the function
function add(val1, val2) {
  console.log(val1 + val2);
}
add(45 + 2); // will print 47

// functions also can return a value
function add(val1, val2) {
  return val1 + val2;
}
console.log(add(45, 2)); // returns 47

// Selectors
// You use selector to accsess the DOM and its various elements
var firstItem = document.getElementById("item-1"); // gets the first entry with that id, it returns one element as you only can have one id with the same name

var myList = document.getElementsByClassName("my-ul"); // gets all the elements with the matching class name

var paragraphs = document.getElementsByTagName("p"); // gets all the elements with the matching tag name

// Jquery selector
var images = document.querySelectorAll("img"); // gets all the img elements

// manipulation of css etc
firstItem.style.color = "red"; // changes the color of firstItem to red
myList[1].style.display = "none"; // hides the second ul list on the page

// we can change all the p tags to the color green with a for loop
for (var i = 0; i < paragraphs.lenght; i++) {
  paragraphs[i].style.color = "green";
}

// Events
// events happen in html but we can listen to them with js and react to it
var submitBtn = document.getElementById("submit"); // gets the element with the submit is and assigns it to submitBtn

submitBtn.addEventListener("click", function (event) {
  console.log("Hey I have ben clicked)");
}); // if the button is clicket the console.log event triggers and the message gets printed
