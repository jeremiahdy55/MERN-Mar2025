//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread
vaccines = ['MMR', 'COVID', 'Smallpox']
console.log(...vaccines)

doctor = {'firstname': 'john', 'lastname': 'doe', 'specialty': 'pediatrician'}
console.log({...doctor})

vaccine_obj = {'name': 'MMR', 'doses required': 2, 'price': 10.00}
doctor_vaccine_obj = { ...doctor, ...vaccine_obj}
console.log(doctor_vaccine_obj)

//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
function make_array(start, end) {
    let i = start
    return_array = []
    while (i <= end) {
        return_array.push(i)
        i++
    }
    return return_array
}

function largesum(...arrayOfNums) {
    let sum = 0
    for (const num of arrayOfNums) {
        sum += num
    }
    return sum
}
console.log(largesum(...make_array(100,150)))

//try writing your favourite quotes on life lessons or from tech experts in expression 
//you need to write the expert name or reference
quote_1 = "Find out who you are and do it on purpose."
author_1 = "Dolly Parton"
quote_2 = "Be the change you want to see in the world."
author_2 = "Mahatma Gandhi"
console.log(`Quote 1: ${quote_1} - ${author_1}`)
console.log(`Quote 2: ${quote_2} - ${author_2}`)

// Task - create a class named as account accepting 3 ormore params  like - name, acct type etc and
// has three methods to show balance, user details and account offers
class Account{
    constructor(firstname="DEFAULT FIRST NAME", lastname="DEFAULT LAST NAME", type="DEFAULT TYPE", balance=0) {
        this.firstname = firstname
        this.lastname = lastname
        this.type = type
        this.balance = balance
    }
    getBalance = () => this.balance
    getUserDetails = () => {return [this.firstname, this.lastname]}
    getType = () => this.type
}
let newAccount = new Account(firstname="John", lastname="Doe", type="Savings", balance=1000)
console.log(newAccount.getBalance())
console.log(newAccount.getUserDetails())
console.log(newAccount.getType())