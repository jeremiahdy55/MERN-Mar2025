var isPalindrome = function(x) {
    let string_x = String(x)
    let negative_index = 0
    console.log("grahh")
    for(let i = 0; i < Math.floor(string_x.length/2); i++) {
        negative_index--
        console.log(negative_index)
        console.log(string_x.at(i))
        console.log(string_x.at(negative_index))
        if(string_x.at(i) !== string_x.at(negative_index)) {
            return false;
        }
    }
    return true;
};
isPalindrome(-121)