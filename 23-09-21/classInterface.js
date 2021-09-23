var Employee = /** @class */ (function () {
    function Employee(firstN, lastN, getAge) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
    Employee.prototype.FullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Employee.prototype.GetAge = function () {
        return this.age;
    };
    return Employee;
}());
var myEmployee = new Employee('Rishi', 'Patel', 21);
var fullName = myEmployee.FullName();
var Age = myEmployee.GetAge();
console.log("Name of Person: " + fullName + "\n" + "Age: " + Age);
