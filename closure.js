function PrintMessage (msg, val) {
    console.log(`${msg} - ${val}`)
}

function account() {
    let user_id = 100
    let first_name = "John"
    let last_name = "Doe"
    function PrintAccount(id, callback) {
        if (id = user_id) {
            callback("The user's name is", first_name + " " + last_name)
        }
    }
    return PrintAccount
}

let x = account()
x(100, PrintMessage)
PrintMessage('Sessions for Wednesday:', 6)
PrintMessage('Sessions for Thursday:', 5)