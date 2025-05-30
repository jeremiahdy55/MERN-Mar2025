function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)}

var addTwoNumbers = function(l1, l2) {
let num1 = ""
let num2 = ""
while (typeof l1.next !== null) {
    num1 = String(l1.val) + num1
    console.log("grimace")
}
while (typeof l2.next !== null) {
    num1 = String(l2.val) + num1
}
let sum = String(parseInt(num1) + parseInt(num2))
let dummyHead = new ListNode(0)
let head = dummyHead
console.log(sum.length)
for (i = sum.length -1; i> -1; i--) {
    head.next = new ListNode(sum[i])
    head = head.next
}
return dummyHead.next

};
console.log(addTwoNumbers([2,4,3], [5,6,4]))
/*
var twoSum = function(nums, target) {
    let sum = undefined
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            console.log(0!=0)
            if (i != j) {
                sum = nums[i] + nums[j]
            }
            if (sum == target) {
                return [i,j]
            }
        }
    }
};

console.log(twoSum([0,4,3,0], 0))


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

function hoisting_example(x, y) {
    return x * y
}
console.log(hoisting_example(2,3) + " This returns NaN because the second definition of hoisting_example is being used. The function requires three parameters.")
// Second definition of function (overloaded)
function hoisting_example(x, y, z) {
    return (x * y * z)
}
console.log(hoisting_example(2,3,4) + " This is expected behavior with JavaScript hoisting principles.")
console.log(`${temp} This is undefined as the variable is intialized with undefined at compile. The value "Hello World" is not assigned till the next line.`)
var temp = "Hello World"
console.log(`${temp} This is expected behavior.`)
*/