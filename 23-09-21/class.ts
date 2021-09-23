class Student {

    rollNumber: number;
    name: string;
 
    constructor(rollNumber: number, name: string){
        this.rollNumber = rollNumber
        this.name = name
    }


    studentData(){
        console.log("Name : "+this.name+", Roll Number : "+this.rollNumber);
    }
}
 

var data = new Student(11, "bharat");
data.studentData();