// Write all the topics of Node JS we discussed this week and try to read it in async way
// Do a practice writingall the data using fs.write (sync async both)

//ReadWrite and IO access can be done via async and sync way as per the needs using FS module
let fs = require("fs") //File System module helps us read and write in files via blocking or non-blocking code

//sync or blocking way of execution
console.log("Reading/Writing IO operations with file - Synchronous")
let fileDataSync = fs.readFileSync("nodeNotes.txt", "utf-8") // this is going to be a waiting call 
console.log("Data from class file ", fileDataSync)
console.log("End synchronous execution")

//async or non-blocking way of execution
let fileDataAsync = "Base Data"
async function asyncFileRead () {
    fileDataAsync = await fs.readFile("nodeNotes.txt","utf-8", (err, data)=>{
        //log("Error ", err)
        //log("Data ", data)
        console.log("Reading/Writing IO operations with file - Asynchronous")
        fileDataAsync= data
        console.log(fileDataAsync)
        console.log("Finished reading asynchronously")
    }) //async way to read data
}
asyncFileRead()

// Write the output asynchronously
let asyncOutput = fileDataSync + "ASYNC WRITE CALL TEST"
fs.writeFile('outputAsync.txt', asyncOutput, 'utf8', (err) => {
    if (err) {
      console.error('Error writing outputAsync:', err)
      return;
    }
    console.log('outputAsync.txt written successfully!')
  }
)

let syncOutput = fileDataSync + "SYNCHRONOUS WRITE CALL TEST"
fs.writeFileSync('outputSync.txt', syncOutput, 'utf8', (err) => {
    if (err) {
      console.error('Error writing outputSync:', err)
      return;
    }
    console.log('outputSync.txt written successfully!')
  }
)

// Using write stream
let writerStreamOutput = fileDataSync + "WRITER STREAM TEST"
let writerStream = fs.createWriteStream("outputWriteStream.txt", "utf8")
writerStream.write(writerStreamOutput)
writerStream.end()

// using buffer and fs.write
let bufferOutput = fileDataSync + "BUFFER WRITE TEST"
let buffer = new Buffer.from(bufferOutput)
fs.open("outputBufferWrite.txt", 'w', (err, fd) => {
    if (err) { 
        console.log('Cant open file outputBufferWrite.txt'); 
    } else { 
        fs.write(fd, buffer, 0, buffer.length, null, (err, writtenbytes) => { 
            if (err) { 
                console.log('Cant write to outputBufferWrite.txt'); 
            } else { 
                console.log(`${writtenbytes} characters added to file`); 
            }
        }) 
    } 
})



// Write the output synchronously
//console.log("Reading/Writing IO operations with file - end")

//console.log(fileData) // "" - 

// setTimeout(() => {
//     console.log(fileData)
// }, 2000);


//writing into the file

// fsObj.writeFile("WriteData.js", "This is a file where we need to add information", (err, data)=>{
//     // console.log(data)
//     // console.log(err)

//         fsObj.readFile("WriteData.js","utf-8", (err, data)=>{
//             log("Error ", err)
//             log("Data ", data)
//         })
// })


/*
let userDetails = {
    name : "Mike",
    age : 19,
    city : "Somewhere on earth ",
    session : "MernStack"
}

//using the async write operation

fs.readFile('Text.json','utf-8',(err, fileData)=>{
    console.log("information" + fileData)
    console.log("errr", err)
    let writerStream = fs.createWriteStream("Text.json","utf8");
    console.log(fileData)
    if (fileData) {           
        let oldData = JSON.parse(fileData)    
        console.log(oldData)
        writerStream.write(JSON.stringify([...oldData, userDetails]));
        writerStream.end();
    }else{
        writerStream.write(JSON.stringify([
            { name : "Eric Phegly",
            age : 22,
            city : "California ",
            session : "MernStack"
        }]));
        writerStream.end();
    }
})

console.log('The a-synchronous operation ends here!!!')



//console.log("Reading/Writing IO operations with file - end")

*/