interface First {
    fName: String,
    lName: String,
    age: Number,
    func: ()=>String,
}

const Details: First = {
        fName: "Bharat",
        lName: "Chaudhary",
        age: 21,
        func: ():String=>{
            return "This is String"
        }
    }

    console.log(Details.func());

    interface Person {
        name: string,
        age: Number,
    }

    interface Employee extends Person {
        gender: String,
        empCode: Number,
    }

    let empObject: Employee = {
        name: "Abhishek",  
        age: 25,
        gender: "Male",  
        empCode: 43, 
    };

    console.log("Name: "+empObject.name);  
    console.log("Employee Code: "+empObject.empCode); 
    
    