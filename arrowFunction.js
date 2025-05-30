//Arrow Functions - are special functions present in ES6 which help us create functions in a shorter expression
// this is also termed as FAT arrow function, as it contains () in its definition

//1. Can be written in a shorter expression
function Sum(p1, p2) {
    return p1 + p2
}

// a fat arrow expression is used to represent the arrow function
let SumArrow = (p1, p2)=> {
        return p1+p2
}

let SumArrowSingleLine = (p1, p2)=> p1+p2 //return is treated as default so no need to explicitely return 

console.log(Sum(5,6))
console.log(SumArrow(5,6))
console.log(SumArrowSingleLine(5,6))

//2. Solves the problem of scope to avoid binding or without using bind
// When we use arrowFunction it copies the context of immediate parent in chain - so that the problem of scope is solved exactly as done by bind

// We need to be cautious when we are going to make arrowFunction as the top parent of our nested functions in chain execution

var Student = {
    StudentName : "Adam",
    Sessions : "AWS, REACT, ES6, JAVA",
    Timings : "Mon-Fri 9-6 PM",

    //getStudentInfo : () => {        
    getStudentInfo : function() {        
        //console.log(this)

        console.log(`
                ${this.StudentName}
                ${this.Sessions}
                ${this.Timings}
            `)

        // setTimeout(function () {
        //     console.log(`
        //         ${this.StudentName}
        //         ${this.Sessions}
        //         ${this.Timings}
        //     `)
        // }.bind(this), 3000);

        //let _this = this;
        
        setTimeout(() => {
            console.log(`
                ${this.StudentName}
                ${this.Sessions}
                ${this.Timings}
            `)
        }, 3000);

        //this.StudentName = "Oscar"
    }
}

Student.getStudentInfo()
Student.StudentName = "Sravya"