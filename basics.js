/*
1. 
Datatypes
In JavaScript the 5 most commonly encountered datatypes are number, string, boolean, undefined, and object.
Null can also be considered a special datatype as it can only contain the null value.
There is an additional datatype that we didn't cover called Symbol(s).

Dynamic typing
Javascript supports dynamic typing. This means that a variable initialized with number datatype will not throw error if
it is overwritten with another datatype, such as string.

Default values
The default value for any literal in JavaScript is undefined. For boolean the default value is false.

Variable naming conventions
JavaScript does not allow most special characters in varaible names, with the most common exceptions being the underscore
and dollar sign (_ and &) characters. This is to ensure that the functionality assigned to those special characters does not
throw errors if put into variable names.

Functions
JavaScript functions are pure functions; they always return something (whether it is function reference or return value).
Again, the default return value is undefined. Because of this functionality JavaScript functions can be stored in variables,
this is called function expression.

Hoisting
JavaScript is not a purely interpreted language; it partially compiles code before execution to ensure most run-time errors are caught.
All function definitions are processed before any other code is executed; for this reason, JavaScript cannot support overloading as
only the most recent function defintion (the one farthest down in the file) will be used. Variables are hoisted with undefined value.

CallStack
JavaScript executes code by using an event loop, determining which code can be executed quickly (these go on the Stack to be executed promptly)
or to be sent to an API to be handled later (these go to the Queue in the order they were received if not using a priority system).
*/

//Q2 - As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
console.log("Question 2")
var x = "Robert "
console.log(typeof x + " : " + x)
x = .0266
console.log(typeof x + " : " + x)
x = false
console.log(typeof x + " : " + x)
x = {"myname" : "Test Me"}
console.log(typeof x + " : " + x)
x = 25166665
console.log(typeof x + " : " + x)
x = undefined
console.log(typeof x + " : " + x)
x = true
console.log(typeof x + " : " + x)
x = "Robert Jr."
console.log(typeof x + " : " + x)
x = null 
console.log(typeof x + " : " + x)
x = {}
console.log(typeof x + " : " + x)
x = -32767
console.log(typeof x + " : " + x)
console.log()

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function
console.log("Question 3")
function showUserInfo(firstname, lastname, age) {
    console.log(`${firstname} ${lastname} ${age}`)
}
showUserInfo("John", "Doe", 25)
console.log()

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!
console.log("Question 4")
function doaddition(x, y, z) {
    return x + y + z
}
console.log(doaddition(2,3,4) + " This is expected behavior as all three paraameters are numbers.")
console.log(doaddition(2) + " This returns NaN because 2 of the parameters were left as default value/undefined.")
console.log(doaddition(2.3, 3) + " This returns NaN because the last parameter was left as default value/undefined.")
console.log(doaddition("first", 2, "three") + " This does not perform numerical addition, but rather concatentation of strings. The second parameter is converted into a string.")
console.log()

//Q5. Give me an example of your choice for each of the below concepts
console.log("Question 5")
// a. closure
// callback function to be used to print out details
function PrintMessage (msg, val) {
    console.log(`${msg} - ${val}`)
}

function employee() {
    // default values of function-employee
    let emp_id = 100
    let first_name = "John"
    let last_name = "Doe"
    // define function in employee to use callback function, this function is returned
    function PrintAccount(id, callback) {
        if (id = emp_id) {
            callback("The user's name is", first_name + " " + last_name)
        }
    }
    return PrintAccount
}
let emp = employee() // get PrintAccount function with employee's default values and assign it to emp
emp(100, PrintMessage)

// b. hoisting
// First defintion of function
function hoisting_example(x, y) {
    return x * y
}
console.log(hoisting_example(2,3) + " This returns NaN because the second definition of hoisting_example is being used. The function requires three parameters.")
// Second definition of function (overloaded)
function hoisting_example(x, y, z) {
    return (x * y * z)
}
console.log(hoisting_example(2,3,4) + " This is expected behavior with JavaScript hoisting principles.")
console.log(`${temp} This is undefined as the variable is intialized with undefined at compile. The value "Hello World" is not assigned till the next line.`)
var temp = "Hello World"
console.log(`${temp} This is expected behavior.`)

// c. constructor function
function Product(name, price, category){
    this.name = name;
    this.price = price;
    this.category = category;
}
let product1 = new Product("beef", 10.00, "meat")
let product2 = new Product("spinach", 1.67, "vegetable")
let product3 = new Product("shoes", 10.00, "clothing")
console.log(`${product1["name"]} ${product1["price"]} ${product1["category"]}`)
console.log(`${product2["name"]} ${product2["price"]} ${product2["category"]}`)
console.log(`${product3["name"]} ${product3["price"]} ${product3["category"]}`)
console.log()

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?
/*
The purpose of call, apply, and bind is to provide specific context to a passed function to achieve the desired functionality.
Call passes an object and individual parameters (ex. function_name.call(object, x, y, z)).
Apply passes an object and an iterable parameter (ex. function_name.apply(object, [x,y,z])).
Bind ensures that an object's context (such as object specific attribute values) are not lost after executing the other code on the Stack.
The example we used in class was setTimeout(); when calling setTimeout within a function the object's attribute values were lost and replaced with
undefined. Bind will ensure that those attribute values are available for when the code is executed after the time delay.
*/

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.
console.log("Qustion 7")
function Student () {
    this.first_name = "Alice";
    this.last_name = "Baker";
    this.student_id = 1;
    this.printInfoDelayed = function () {
        setTimeout(function () {
            console.log("printInfoDelayed has been called")
            console.log(this.first_name)
            console.log(this.last_name)
            console.log(this.student_id)
            console.log("printInfoDelayed has ended")
        }.bind(this), 2000); //set two seconds time delay
    }
}
let alice = new Student()
alice.printInfoDelayed()
console.log()

//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?
let null_obj = Object.create(null)
/* 
Creating an object will null prototype allows for a clean slate. This is good for when custom object attributes or custom functionality is needed
and to prevent unattended clashing of already existing functions.
*/

//Q9. How do we merge different objects properties using Object class function
console.log("Question 9")
let obj_1 = {"name": "John", "age": 25}
let obj_2 = {"hobbies": ["hiking", "golfing"]}
let obj_merge = Object.assign({}, obj_1, obj_2)
console.log(obj_merge)
console.log()

//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned
export const exported_x = 10;