

    interface Person {  
        firstName: String;  
        lastName: String;  
        age: Number;  
        FullName();  
        GetAge();  
    }  
    class Employee implements Person {  
        firstName: String;  
        lastName: String;  
        age:Number;  
        FullName() {  
            return this.firstName + ' ' + this.lastName;  
        }  
        GetAge() {  
            return this.age;  
        }  
        constructor(firstN: String, lastN: String, getAge: Number) {  
            this.firstName = firstN;  
            this.lastName = lastN;  
            this.age = getAge;  
        }  
    }  

    let myEmployee = new Employee('Rishi', 'Patel', 21);  
    let fullName = myEmployee.FullName();  
    let Age = myEmployee.GetAge();  
    console.log("Name of Person: " +fullName + "\n" + "Age: " + Age);  