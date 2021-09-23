    class Student {   
        id: number;  
        name:string;  
         
       constructor(id: number, name:string) {   
           this.id = id;  
           this.name = name;  
       }    
         
       display():void {   
          console.log("Function displays Student ID is: "+this.id)   
          console.log("Function displays Student ID is: "+this.name)   
       }   
    }   
      
    let obj = new Student(101, "Virat Kohli")  
      
    console.log("Reading attribute value of Student as: " +obj.id,)  
    console.log("Reading attribute value of Student as: " +obj.name)  
      
    obj.display()  