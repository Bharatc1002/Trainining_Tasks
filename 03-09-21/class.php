<?php

class Car {
    public $name;
    public $color;

    function set_name($name, $color){
        $this->name = $name;
        $this->color = $color;
    }
    function get_name(){
        return $this->name;
    }
    function get_color(){
        return $this->color;
    }
}

$tata = new Car();
$hyundai = new Car();
$tata->set_name("Nexon", "Grey");
$hyundai->set_name("Creta", "Black");

echo $tata->get_name();
echo "<br>";
echo $tata->get_color();
echo "<br><br>";
echo $hyundai->get_name();
echo "<br>";
echo $hyundai->get_color();




?>