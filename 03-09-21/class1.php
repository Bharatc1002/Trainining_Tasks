<?php

class Parents {
    
    function f1(){
        echo "Hello world";
    }
}

class Child extends Parents {

}

$var = new Child();
$var->f1();





?>