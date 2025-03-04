/*
console.log("Before: ", a); // undefined
var a = 10;
console.log("After: ", a); // 10


function hoistExample() {
    var a;
    a = 10;
    }

hoistExample();
console.log(a); // ReferenceError: a is not defined


testFunc(); //ReferenceError: testFunc is not defined
var testFunc = function funcHoist() {
console.log("I am being hoisted.");
} 



setTimeout(function(){
console.log("first timeout");
setTimeout(function(){
console.log("inner timeout"); 
},0); 

setTimeout(function(){
console.log("second timeout");
},100);

setTimeout(function(){
console.log("third timeout");
},100);
},100);


// The function funcs and the var funcs occupy the same name but are both valid.
console.log(funcs);
var funcs;
function funcs(){
funcs = 3;
}
funcs();
console.log(funcs);
*/