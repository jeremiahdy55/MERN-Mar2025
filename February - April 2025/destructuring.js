//Practice - 
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//Questions for practice

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

let {FirstName, TotalMarks, Subject:SubjectMarks, LastName="ABC"} = Student;
console.log(FirstName)
console.log(LastName)
console.log(TotalMarks)
console.log(SubjectMarks)
SubjectMarks["Ecology"] = 95
console.log(SubjectMarks)

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 
let [res_24, res_25, res_26, ...res_rest] = ["graduate", "land a job", "survive", "mortgage a house", "get a dog"]
console.log(res_24)
console.log(res_25)
console.log(res_26)
console.log(res_rest)

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
function multiply(x,y,z) {
    val = undefined
    if (x && y && z) {
        val = x * y * z
    } else {
        val = 0
    }
    return val
}
console.log(multiply(1,2,4))

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
let numArray = [1,2,3,4,5]
numArray.push('newval')
for (const key in numArray) {
    if (Object.prototype.hasOwnProperty.call(numArray, key)) {
        const element = numArray[key];
        console.log(`${key} ${element}`);
    }
}

for (const element of numArray) {
    console.log(`${element}`)
}

//create an example of const where we can update on property of the object, where it says const is mutable
const person = {firstname: "John", lastname:"Doe"}
console.log(person)
person.firstname = "Jane"
person.lastname = "Baker"
console.log(person)

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let
for (var i = 0; i<5; i++){
    setTimeout(function () {console.log("this is i: "+ i)}, 2000)
}

for (let j = 0; j<5; j++){
    setTimeout(function () {console.log("this is j: " + j)}, 2000);
}