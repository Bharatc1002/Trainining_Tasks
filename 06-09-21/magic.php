<?php
class Names {
    private $fName;
    private $lName;
 
    public function __construct($fname, $lname) 
    {
        $this->fName = $fname;
        $this->lName = $lname;
    }
    public function __set($name, $value) 
    {
        echo "properties name=".$name."and value".$value."<br>" ;
    }
    public function __get($name) 
    {
        if($name === "newName")
        {
            return $this->name;
        }
        else{
            echo "error <br>";
        }
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
 
$obj= new Names('firstName', 'secondName');
echo $obj->newName;
echo $obj;
$obj->hii("welcome");

?>