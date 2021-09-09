<?php

interface First {
    function first();
}

interface Second extends First {
    function second();
}

class Third implements Second {
    
    public function first(){
        echo "first from First interface. <br>";
    } 
    public function second(){
        echo "second from Second interface. <br>";
    }
}

$obj = new Third;
$obj->first();
$obj->second();

?>