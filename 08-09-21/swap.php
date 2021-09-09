<?php

$num1 = 10;
$num2 = 15;

function swap(&$a, &$b){
    $t=$a;
    $a=$b;
    $b=$t;
}

swap($num1, $num2);
echo $num1 . "<br>";
echo $num2;

//call by value method is default and better if we don't want to change actual values.
//use call by reference only when required 

?>

