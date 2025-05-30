attendance() //calls hoisted function, outputs[Three sessions were attended today; called function]
function attendance() {
    console.log("Three sessions were attended today; called function")
}
var attendance = function(x) {
    console.log(x + " sessions were attended today; called function expression")
}
attendance(4) // passes 4, outputs [4 sessions were attended today; called function expression]
attendance() // passes undefined, outputs [undefined sessions were attended today; called function expression]