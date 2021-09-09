<?php

$num1 = 15;
$num2 = 25;
$num3 = 21;


function findMax($a, $b, $c = 30){
    echo max($a, $b, $c) . "<br>";
}

findMax($num1, $num2, $num3);
findMax($num1, $num2);


?>