function *GeneratorFunc() {
    while (true) {
        yield Math.random()
    }
}
let generator = GeneratorFunc()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

