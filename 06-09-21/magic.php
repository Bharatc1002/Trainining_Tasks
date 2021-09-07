<?php
class Names {
    private $fName;
    private $lName;
    public array = ["firstName" => "Bharat", "secondName" => "Chaudhary"];
 
    public function __construct($fname, $lname) 
    {
        $this->fName = $fname;
        $this->lName = $lname;
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
        echo $name;
    }
    public function __toString()
    {
        return 'Student name: '.$this->name. 'Student surname: '.$this->sur."<br>";
    }
    public function __call($methodName, $arguments) 
    {
        echo $methodName;
        echo $arguments;
    }
    public function __isset($name) 
    {
        return isset($this->$name);
    }
}
 
$name1= new Names('firstName', 'secondName');
echo $name1->newName;
echo $name1;
$name1->func("welcome");

?>