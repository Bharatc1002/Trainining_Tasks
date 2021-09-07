<?php
class Names {
    private $fName;
    private $lName;
    private $array = array("firstName" => "Bharat", "secondName" => "Chaudhary", "names" => "write here");
 
    public function __construct($fname, $lname) 
    {
        $this->fName = $fname;
        $this->lName = $lname;
        echo $this->fName . "<br>";
        echo $this->lName . "<br>";
    }
    public function __set($name, $value) 
    {
        if(array_key_exists($name, $this->array)){
            return $this->array[$name] = $value;
        } else {
            echo "invalid data member";
        }
    }
    public function __get($name) 
    {
        if(array_key_exists($name, $this->array)){
            return $this->array[$name];
        } else {
            return "non-existing variable: $name <br>";
        }
        
    }
    public function __toString()
    {
        return get_class($this) . "<br>";
    }
    public function __call($name, $array) 
    {
        echo $name . "<br>";
        print_r($array);
        echo "<br>";
    }
    public function __isset($name) 
    {
        return isset($this->$name);
    }
    public static function __callStatic($name, $array){
        echo $name . "<br>";
        foreach($array as $arg){
            echo $arg . "<br>";
        }
    }
    public function __isset($name){
        echo $name;
    }
}
 
$name1= new Names('firstName', 'secondName'); //__construct function
echo $name1->newName; // __get function
echo $name1;  // __toString function
$name1->func("Hello", "Welcome","Please sit"); //__call function
echo $name1->names . "<br>"; //__get function
$name1->names = "okay"; //__set function
echo $name1->names . "<br>"; //__get function
Names::world("zero", "one", "two", "three"); //__callStatic function
isset($name1->height);


?>