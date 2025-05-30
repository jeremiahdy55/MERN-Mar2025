let student1 = {first_name: "John", last_name: "Doe", student_id: 1}
let student2 = {first_name: "Jane", last_name: "Dove", student_id: 2}

function getClasses(class1, class2, class3, class4){
    console.log(`
        ${this.student_id}
        ${this.first_name}
        ${this.last_name}
        ${class1}
        ${class2}
        ${class3}
        ${class4}
        `)
}
let class_schedule1 = ["Math", "Science", "History", "Language"]
let class_schedule2 = ["History", "Langauge", "Science", "Math"]
getClasses.call(student1, "Math", "Science", "History", "Language")
getClasses.call(student2, "History", "Langauge", "Science", "Math")
getClasses.apply(student1, class_schedule1)
getClasses.apply(student2, class_schedule2)