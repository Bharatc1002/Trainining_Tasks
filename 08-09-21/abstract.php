<?php

abstract class Mobile {
    public function __construct(){
        echo "construct function from abstract class <br>";
    }
    abstract public function new();
}

class Samsung extends Mobile {
    public function new(){
        echo "this is abstract class method <br>";
    }
}

$obj = new Samsung;
$obj->new();

?>