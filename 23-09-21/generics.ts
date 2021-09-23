function generics<T, U>(id:T, name:U): void {   
    console.log(`Id is: ${id}\nName is: ${name}`);    
  }  
  generics<number, string>(101, "Abhishek");  






  class StudentInfo<T,U>  
  {   
      private Id: T;  
      private Name: U;  
      setValue(id: T, name: U): void {   
          this.Id = id;  
          this.Name = name;  
      }  
      display():void {   
          console.log(`Id = ${this.Id}, Name = ${this.Name}`);  
      }  
  }  
  let stud = new StudentInfo<number, string>();  
  stud.setValue(101, "Virat");  
  stud.display();  
  let std = new StudentInfo<string, string>();  
  std.setValue("201", "Rohit");  
  std.display();  