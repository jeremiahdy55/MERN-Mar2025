//Shorthand : Removes the redundant variable, name used as key
//in a json object if the key name and the value for that key if we wish to read both are same then
//shorthand allows us to use just the variable to create complete object

let lion = "roar", birds = "chirp", cow = "moo", dogs = "bark"; 

let animalSound = {
    lion : lion,
    birds : birds,
    cow : cow,
    dogs : dogs,
}

let animalSoundES6 = {
    lion,
    birds,
    cow,
    dogs,
}

//console.log("Animal sounds with vanilla javascript ", animalSound)

//console.log("Animal sounds with ES6 short hand ", animalSoundES6)

//converting js object to string format 

//typeof animalSoundES6 => toString() ==> [object Object]

//console.log(`Animal sounds with ES6 short hand ${animalSoundES6}`)

//we need to convert the JSON object to string format by using helper function present in JSON object
//console.log(`Animal sounds with ES6 short hand ${JSON.stringify(animalSoundES6)}`)


//Task evaluate the out put and fix
//console.log("Animal sounds with vanilla javascript "+ animalSound)


//module.exports - is used to export in core js

module.exports = animalSoundES6;

globalThis.userInfo = {
    Name : "Jeremiah Dy",
    Session : "MERNStack"
}