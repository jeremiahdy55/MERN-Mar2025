//js-executor
//file<excel or json>, database
//database <-- api (node) <-- data (front end)

// let httpObj = require("http")
//httpObj.get()
//httpObj.get()
//http.put()
// http.post()
//console.log(httpObj.METHODS)
//console.log(httpObj.request())
/*
let fs = require("fs")

let shObj =  require("./shortHand.js")

//node system modules have error first approach for their callbacks
// fs.readFile('shortHand.js',"utf-8",(err, fileData)=>{
//     console.log(err) // Error first callback
//     console.log(fileData) //Data will be the second parameter
    
// })

// other modules
let { log } = require("console")

//log(__dirname) // gives the absolute path of the directory our file is in
//log(__filename) // gives the absolute path of the directory our file is in with current file name

//reading from global object
//log(globalThis.userInfo)

let osObj = require("os")

// log(osObj.cpus())
// log(osObj.hostname())
// log(osObj.machine())
// log(osObj.version())
// log(osObj)


// we can pass data via terminal using std.out and std.in which are part of process module
//log(process) //gives information about the node processes

let dataFromTerminal = "Initial Info"
//callback with data inserted
// process.stdin.on('data', data =>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
//     dataFromTerminal = data.toString();
//     //process.exit();
// })
// process.stdin.on('exit', data =>{
//     log("we are exiting")
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
// })

// setTimeout(()=>{
//     console.log(dataFromTerminal)
// },10000)

//REPL - Read Event Print and Loop

//come out of loop execution we need to use ctrl+c (twice)


//to write our own customized events
const {EventEmitter} = require("events")
//event emitter - on is custom event
// EventEmitter.on("request","get",(req, res)=>{
//     res.send("Information to be shared with user")
// })

//utility module
const util = require('util')
// util.log(path.basename(__filename))
// util.log(path.basename(__dirname))
//log(util.debuglog())


const v8 = require('v8');

// log(v8)

// log(v8.getHeapSnapshot())
// log(v8.getHeapStatistics())

//process.nextTick(()=>{log("Next Tick Called!!")})



let path = require('path')
//path
// console.log(`The file name is - ${path.basename(__filename)}`);
// console.log(`The file name is abosolute - ${path.isAbsolute(__dirname)}`);
// console.log(`The resolved file name is - ${path.resolve(__filename)}`);

*/