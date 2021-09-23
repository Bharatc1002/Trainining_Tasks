function generics(id, name) {
    console.log("Id is: " + id + "\nName is: " + name);
}
generics(101, "Abhishek");
var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.setValue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    StudentInfo.prototype.display = function () {
        console.log("Id = " + this.Id + ", Name = " + this.Name);
    };
    return StudentInfo;
}());
var stud = new StudentInfo();
stud.setValue(101, "Virat");
stud.display();
var std = new StudentInfo();
std.setValue("201", "Rohit");
std.display();
