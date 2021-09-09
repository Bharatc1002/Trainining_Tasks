<?php

class First {
    function __construct(){
        echo "function from firstClass <br>";
    }
}

class Second extends First {
    function secondClass(){
        echo "this one from secondClass <br>";
    }
}

$obj = new Second;
$obj->secondClass();

?>