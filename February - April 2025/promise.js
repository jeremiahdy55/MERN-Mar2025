// create a promise with name student login
// resolve it after 3 seconds and print student details with call status in the response object
// reject it after 4 seconds and print error details with call status in the response object
let studentPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({
            status : "Success",
            student: "John Doe",
            studentID: 1,
            code : 200,
            message : "Authentication Success"
        })
    }, 3000); //3 seconds wait to make it feel like making a call to server
    setTimeout(() => {
        reject({
            status : "Failed",
            student: "Failed student",
            studentID: 4,
            code : 500,
            message : "Internal server error!!"
        })
    }, 4000); //4 seconds wait to make it feel like making a call to server

})
console.log(studentPromise)

studentPromise
.then((data)=>{ //this access the data send when promise is resolved
    console.log(data) //upon success you'll make call to authorization
})
.catch((err)=>{ // this access the data send when promise is rejected
    console.log(err)
})

//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
function returnUserPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                "name" : "John Doe",
                "address" :'123 Example St.',
                "account number" : 1000
            });
        }, 3000)

        setTimeout(()=>{
            reject({
                "nameREJECTED" : "ALICE BAKER",
                "addressREJECTED" :'999 Example St.',
                "account numberREJECTED" : 9999
            });
        }, 4000)
    }).catch((data) => console.log(data)) //this will work because the Promise object is still in context, it will return with rejection
}
async function asyncCall() {
    await returnUserPromise().then((data) => console.log(data))//.catch((data) => console.log(data)) this wont work because of async await
}
asyncCall()
// also check when it rejects after 2 second
// analyse how await works as blocking execution



// create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
console.log("Start map practice")
let myMap = new Map();
let numberKey = 20, stringKey = "key", functionKey = function(){}, objectKey = {}
myMap.set(numberKey, "numberKey was called")
myMap.set(objectKey, "objectKey was called")
myMap.set(stringKey, "stringKey was called")
myMap.set(functionKey, "functionKey was called")

console.log(myMap.size)
console.log(myMap.get(functionKey))
console.log(myMap.has(numberKey))
console.log(myMap.has('invalidKey'))
console.log("deleted number key: " + myMap.delete(numberKey))
console.log(myMap.has(numberKey))
console.log(myMap.size)
console.log("cleared the map: " + myMap.clear())
console.log(myMap.size)
console.log()
console.log()
// create a list using set and show the usage of 5 functions (.add, .clear)
console.log("start set practice")
let mySet = new Set();
mySet.add("a")
mySet.add(2)
mySet.add("c")
mySet.add(4)
mySet.forEach((val)=> console.log(val))
console.log(mySet.has(4))
mySet.delete(4)
console.log(mySet.has(4))
console.log(mySet.values())
mySet.clear()
console.log(mySet.values())

//Test multi-promise functions
let resolve2 = new Promise((resolve) => setTimeout(() => resolve("resolved after 2 seconds"), 2000))
let resolve5 = new Promise((resolve) => setTimeout(() => resolve("resolved after 5 seconds"), 5000))
let reject3 = new Promise((_, reject) => setTimeout(() => reject("rejected after 3 seconds"), 3000))
let reject4 = new Promise((_, reject) => setTimeout(() => reject("rejected after 4 seconds"), 4000))

// Promise.all() waits for all promises in array to resolve, then uses truth-logic to determine whether .all() returns resolve or reject
// If any Promise in array rejects, .all() will reject
Promise.all([resolve2, resolve5]).then((data) => console.log(`1. Promise.all resolved successfully output: ${data}`))
Promise.all([resolve2, reject4]).catch((data) => console.log(`2. Promise.all rejected output: ${data}`))

// Promise.allSettled() waits for all promises in array to resolve, full stop
// returns an array of Promise resolves and rejects
Promise.allSettled([resolve2, resolve5]).then((data) => console.log(`3. Promise.allSettled completed successfully output: ${data}`))
Promise.allSettled([resolve2, reject3]).then((data) => console.log(`4. Promise.allSettled completed successfully output: ${data}`))

// Promise.race() returns the first promise to SETTLE regardless of resolve or reject
Promise.race([resolve2, resolve5, reject3, reject4]).then((data) => console.log(`5. Promise.race resolved successfully output: ${data}`))
Promise.race([resolve5, reject3, reject4]).catch((data) => console.log(`6. Promise.race resolved successfully output: ${data}`))

// Promise.any() returns the first promise to RESOLVE <- read that again
Promise.any([resolve2, resolve5, reject3, reject4]).then((data) => console.log(`7. Promise.any resolved successfully output: ${data}`))
Promise.any([resolve5, reject3, reject4]).then((data) => console.log(`8. Promise.any resolved successfully output: ${data}`))
Promise.any([reject3, reject4]).catch((data) => console.log(`9. Promise.any rejected output: ${data}`))





// Async and Await are the keywords used to create a separate thread and the concept comes from the multi-threaded programming languages
// which evantually creates a separate mini stack to do its execution by using the processor thread

// async - keyword is used to specify the function which you want to execute on separate thread
// await - keyowrd is used to fetch the information done via async function and show result on main stack
// each or multiple operations on a separate thread will be synchronous


//multi-threading

//main thread - 200 req/sec

// if it rises from 200 to 300 req/sec <responses will be slowed by 50%>

// main thread => 200 req/sec <100 req/sec start redirecting to other threads>
// thread1 => to handle 50 req/sec  --> 100-150
// thread2 => to handle 50 req/sec  --> 150-200
// thread3 => to handle 50 req/sec  --> 200-250
// thread4 => to handle 50 req/sec  --> 250-300


/*
function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved',
                    "task" : "Learning async await"
                    });
            }, 2000);
    });
}


console.log("async Execution starts");

//async creates a new thread to execute API's that we see will take some time

async function asyncCall() {

    console.log("inside async call function")

    await resolveAfter2Seconds().then((data)=> console.log(data)) //this will be a sync call means wait to complete before moving to next line

    console.log("inside async call function - step 2")

    await resolveAfter2Seconds().then((data)=> console.log(data))

    console.log("inside async call function - done")
}

asyncCall();

console.log("async Execution ends - outer");

*/
