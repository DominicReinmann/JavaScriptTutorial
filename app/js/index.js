// This is a comment



// Variable's and values
var name = 'Dominic'; // string literal
var age = 20; // number literal 
var isApproves = false; // boolean Literal 
var firstName = undefined; 
var selectColor = null;




// Arrays 

// Arrays ar started with square braces []
var list = ["john", "Marry", "Sander"]

//There are other methods to start an Array 

list2 =  ["john", "Marry", "Sander"]
list3 = new Array("john", "Marry", "Sander")

// You can accsess item in the array with its index number 

list2[2] // This will return Sander as result 

// There are different methods with wich you can modifie your array
list.length // returns the length of the array
list.push(2) // adds the value to the end of the array
list.pop() // removes the last item in the array
list.shift() // removes the first item in the array
list.unshift() // adds an item to the front of the array
list.indexOf() // returns the index of the given value 

// Objects

// Objects use curly brackets instead of square brackets
var person = new Object()
    car = {};

person.name = "Dominic"
person.age = 25
person.height = 1.68
person.married = false

// You can accsess the values with square brackets and the name of the value 
person["name"]
// But its easyier to accsess it with the dot operator 
person.name
// If you want to chance a given property you can use the square brackets and assign a new value 
person["name"] = "Tim"

