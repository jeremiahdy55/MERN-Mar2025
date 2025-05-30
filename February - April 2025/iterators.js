//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];


// filter, map, some , reduce



//1. List the person with javascript tag
let javascript_persons = persons.filter(person => person.tags == "javascript")
console.log(javascript_persons)
//2. List the name of person using java and put programmer after their name, change the name key to Developer
let java_developers = persons.map(
    (person) => {
        if (person.tags == "java") {
            return {"Developer" : person.name + " programmer"}
        }
    }
).filter((person) => person != undefined)
console.log(java_developers)
//3. If we have anyone with tag python
let have_python_tags = persons.some(person => person.tags == "python")
console.log(have_python_tags)
//4. Find the number of unique tags and their count present in list
let uniqueTagsCount = persons.reduce((preVal, currVal, index, array) => {
    preVal[currVal.tags] = (preVal[currVal.tags] ? preVal[currVal.tags] + 1 : 1)
    return preVal
}, [])
console.log(uniqueTagsCount)
/*
let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Batman"}
]

let uniquePersnCount = personsList.reduce((prevVal, currVal, index, array)=>{
    console.log(prevVal)
    console.log(currVal)

    //NOTES
    // At index currVal.savedby, truthy check this val,   if true-add (1)               ,if false-initialize as (1)
    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1
    
    return prevVal;
}, []);//new Set());//initialize the value to be present in prevVal for the first time

console.log(uniquePersnCount)
*/