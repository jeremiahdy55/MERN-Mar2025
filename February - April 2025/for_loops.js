let numbers = [1,2,3,4,5,6,7,8,9]

for (const element of numbers) {
    console.log(element);
}

numbers.push(10)
numbers.push("John Doe")

for (const element of numbers) {
    console.log(element);
}

for (const key in numbers) {
    if (Object.prototype.hasOwnProperty.call(numbers, key)) {
        const element = numbers[key];
        console.log(`${key} ${element}`)
    }
}