let weakMap = new Map()
let key1 = 10, key2 = 20, func_key = function() {}
weakMap.set(key1, `key1:${key1}`)
weakMap.set(key2, `key2:${key2}`)
weakMap.set(func_key, `func_key:${func_key}`)
console.log(weakMap)
console.log(weakMap.entries())

let strongMap = new Map()
let str_key1 = "Alice", str_key2 = "Bob", str_key3 = "Charlie"
strongMap.set(str_key1, `str_key1:${str_key1}`)
strongMap.set(str_key2, `str_key2:${str_key2}`)
strongMap.set(str_key3, `str_key3:${str_key3}`)
console.log(strongMap.get(str_key1))
console.log(strongMap.get(str_key2))
console.log(strongMap.get(str_key3))

console.log('\n')

let worldTour = new Set()
worldTour.add("London")
worldTour.add("Paris")
worldTour.add("Brussels")
worldTour.add("Tokyo")
worldTour.add("New York City")
worldTour.add("Kyoto")
worldTour.add("Berlin")
worldTour.add("Vancouver")
worldTour.add("Chicago")
worldTour.add("Seattle")
worldTour.add("London")
for (const city of worldTour) {
    console.log(city)
}