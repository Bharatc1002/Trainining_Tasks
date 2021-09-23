var Student = /** @class */ (function () {
    function Student(rollNumber, name) {
        this.rollNumber = rollNumber;
        this.name = name;
    }
    Student.prototype.studentData = function () {
        console.log("Name : " + this.name + ", Roll Number : " + this.rollNumber);
    };
    return Student;
}());
var data = new Student(11, "bharat");
data.studentData();
