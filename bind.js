let student1 = {
    first_name: "John", last_name: "Doe", student_id: 1,
    printInfoDelay: function () {
        setTimeout(function () {
            console.log("setTimeout has been called")
            // should return three undefined value because printInfoDelay is no longer in scope of student1
            console.log(this.first_name)
            console.log(this.last_name)
            console.log(this.student_id)
        }, 2000);
    }
}
let student2 = {
    first_name: "Jane", last_name: "Dove", student_id: 2,
    printInfoDelayWith_this: function () {
        var _this = this
        setTimeout(function () {
            console.log("setTimeoutWith_this has been called")
            // should return the correct data because the context of student2 has been copied and passed into the function
            // the surrounding context is NOT student2
            console.log(_this.first_name)
            console.log(_this.last_name)
            console.log(_this.student_id)
            // These lines do not change intial run, because data was copied
            this.first_name = "Charlie";
            this.last_name = "Chipmunk";
            this.student_id = 4;
        }, 2000);
    }
}
let student3 = {
    first_name: "Alice", last_name: "Baker", student_id: 3,
    printInfoDelayWithBind: function () {
        setTimeout(function () {
            console.log("setTimeoutWithBind has been called")
            // should return the correct data because the context of student3 is specifically held through .bind(this)
            console.log(this.first_name)
            console.log(this.last_name)
            console.log(this.student_id)
        }.bind(this), 2000);
    }
}
let student4 = {
    first_name: "Alice", last_name: "Baker", student_id: 3,
    printInfoDelayWithBind: function () {
        setTimeout(function () {
            console.log("setTimeoutWithBind has been called")
            // should return the data values overwritten below because the context of student4 is modified before the function is executed
            console.log(this.first_name)
            console.log(this.last_name)
            console.log(this.student_id)
        }.bind(this), 2000)
        this.first_name = "Charlie";
        this.last_name = "Chipmunk";
        this.student_id = 4;
    }
}

student1.printInfoDelay()
student2.printInfoDelayWith_this()
student3.printInfoDelayWithBind()
student4.printInfoDelayWithBind()