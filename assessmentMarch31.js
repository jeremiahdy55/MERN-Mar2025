// 31st March - 2025 : ES6, eventloop and core JS questions
// All questions are mandatory - 14 out of 15 needs to be done, 1st question is equal to two question so can't be left
// 7th requires proper elaboration and example

// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
const heroes = [
    { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
    { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
    { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
    { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
    { name: 'Batman',         family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
    { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
    { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
    { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
  ]
// One way to preserve immutability on the heroes array is to use map or other similar function(s) to create a new object/object array if or when
// the user wants to change a value. If the goal is to simply prevent any changes, the user could wrap the heroes array in a class and only provide
// get-methods, but no set methods to prevent overwriting any objects or their attributes.
// a. Get heroes who are not evils
let good_heroes = heroes.filter(hero => !(hero.isEvil))
console.log(good_heroes)
// b. Print Unique family names
let unique_family_names = new Set(heroes.map(hero => hero.family))
console.log(unique_family_names)
// c. Print Hero Names from given objects, and append sir in each of them before printing
let hero_names = heroes.map(
    (hero) => {
        return `Sir ${hero.name}`
    }
)
console.log(hero_names)
// d. Do we have any hero in Marvel Family who is not evil
let any_marvel_good = heroes.some(hero => !(hero.isEvil) && (hero.family == "Marvel"))
console.log(any_marvel_good)

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one
function rest_multiply_apply(...numbers) {
    console.log("rest_multiply_apply name: " + this.name)
    console.log("rest_multiply_apply age: " + this.age)
    let product = 1
    for (const num of numbers) {
        product = product * num
    }
    return product
}
let numbers = [1,2,3,4,5]
let obj = {name: "Alice Baker", age: 100}
console.log("rest_multiply_apply return value (product): " + rest_multiply_apply.apply(obj, numbers))


//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
let {userDetails: name, contactNumber=9119119110} = person
console.log(`${name.last} ${contactNumber}`)

//4. Give me an example of const data manipulation
const fruit = {"name": "Apple", "color": "red"}
fruit["color"] = "green"
console.log(fruit)

//5. What is the difference between for-of and for-in show with examples
// for-in iterates over the indexes/keys of the iterable, while for-of iterates over the objects of the iterable
//let numbers = [1,2,3,4,5] reuse numbers array from earlier
for (const key in numbers) {
    if (Object.prototype.hasOwnProperty.call(numbers, key)) {
        const element = numbers[key];
        console.log(`For-in at index ${key}: ${element}`)
    }
}
for (const element of numbers) {
    console.log(`For-of element in order: ${element}`)
}
//6. Give me an example of bind and write its usage, comparison with arrow function
// the arrow function is a shorthand way of writing a function, typically used for functions that will be used once only
// Bind, on the other hand, provides increased functionality by preserving object context for functions calls made asynchronously
// or after the intial function call is off the stack. In the below example, bindFunc will print "after" because the object context is preserved.
let bind_example = {
    value: "before",
    bindFunc: function () {
        setTimeout(function () {
            console.log(`bindFunc has been called, value: ${this.value}`)
        }.bind(this), 2000)
        this.value="after"
    }
}
bind_example.bindFunc()
//7. Create an example showing usage of event loop in concurrent execution cycle

//8. create an example showing usage of short hand and default param.
//reuse numbers array, create an array of boolean values on whether the number is even
let is_even = numbers.map(num => (num % 2) == 0)
console.log(is_even)
// sum function will take two parameters, default each parameter to 0 if not stated
function sum(x=0, y=0){
    return x+y
}
console.log(`x:1, y:not stated => ${sum(x=1)}`)
console.log(`x:4, y:5 => ${sum(x=4, y=5)}`)
console.log(`x:not stated, y:5 => ${sum(y=5)}`)

//9. Create two objects with some properties and merge them using Object method and ES6 way
let teacher = {"name": "John Doe", "hired": "January 1, 2000"}
let classes = {"period1" : "homeroom", "period2": "Life science"}
let object_method_merge = Object.assign({}, teacher, classes)
let es6_merge = {...teacher, ...classes}
console.log(object_method_merge)
console.log(es6_merge)

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let myMap = new Map()
let key1 = 10
myMap.set(key1, `key1:${key1}`)
console.log(myMap.get(key1))
console.log("myMap.has(key1)" + myMap.has(key1))
console.log("before delete size(myMap): " + myMap.size)
myMap.delete(key1)
console.log("after delete size(myMap): " + myMap.size)

let mySet = new Set()
mySet.add("London")
mySet.add("Tokyo")
console.log(`mySet.has("New York") ${mySet.has("New York")}`)
console.log(`mySet.has("London") ${mySet.has("London")}`)
console.log("Before clear size(mySet): " + mySet.size)
mySet.clear()
console.log("after clear size(mySet): "+mySet.size)
console.log(mySet)

//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let myPromise= new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({
            status : "Success",
            message : "Authentication Success",
            code: 200,
            data: "This is a successful resolve",
            meta: "called by setTimeoutFunction in myPromise"
        })
    }, 2000); //2 seconds wait for resolve
    setTimeout(() => {
        reject({
            status : "Failed",
            message : "Internal server error!!",
            code: 999,
            data: "This is a reject",
            meta: "called by setTimeoutFunction in myPromise"
        })
    }, 4000); //3 seconds wait for reject
})

//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
function rest_multiply(...numbers) {
    let product = 1
    for (const num of numbers) {
        product = product * num
    }
    return product
}
console.log(`rest_multiply return value: ${rest_multiply(...numbers)}`)

//13. Use the question #11 to build promises using async and await - with multithread
function resolvePromise () {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                "msg": "question 13 promise has resolved"
            });
        }, 3000)

        setTimeout(()=>{
            reject({
                "msg": "question 13 promise has rejected"
            });
        }, 4000)
    })
}
function rejectPromise () {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                "msg": "question 13 promise has resolved"
            });
        }, 3000)

        setTimeout(()=>{
            reject({
                "msg": "question 13 promise has rejected"
            });
        }, 2000)
    })
}
async function asyncCall() {
    let promise_array = [resolvePromise(), rejectPromise()]
    await Promise.allSettled(promise_array).then((data) => console.log(data))
}
asyncCall()
//14. Create an example of generator function of your choice
// Infinite generator that produces random numbers
function *GeneratorFunc() {
    while (true) {
        yield Math.random()
    }
}

//15. Explain your knowledge on function and object protoype what is the purpose of the same - example
// Both functions and objects inherit attributes and/or methods from a prototype (similar to parent class in Java)
// By invoking the prototype keyword, you can make changes to the function or object class as a whole, which will affect all instances
// of that object.
class Animal{
    constructor(species, name) {
        this.species = species
        this.name = name
    }
}
let dog = new Animal("dog", "Max")
let cat = new Animal("cat", "Cinnamon")
console.log(dog)
console.log(cat)
// Try accessing dog or cat classification
console.log("Try accessing classification before using prototype to add to Animal returns " + dog.classification)
// After setting classification for Animal superclass, both dog and cat have access to it
Animal.prototype.classification = "mammal"
console.log("dog.classification = " + dog.classification)
console.log("cat.classification = " + cat.classification)