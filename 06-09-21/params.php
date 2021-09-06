<?php

class Table {
    public $firstItem;
    public $secondItem;
    function set_item($item1, $item2 = "Laptop"){
        $this->firstItem = $item1;
        $this->secondItem = $item2;
    }

    function get_item(){
        echo $this->firstItem;
        echo "<br>";
        echo $this->secondItem;
    }
}

$obj = new Table;
$obj->set_item("Bottle");
$obj->get_item();


?>