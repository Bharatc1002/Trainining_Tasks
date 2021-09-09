<?php

$array = ["name", "surname", "address"];

function updater($var){
    $len = count($var);
    $var[$len-1] = "lastname";
    echo "updated array in function <br>";
    print_r($var);
}

updater($array);
echo "<br><br>";
echo "original array outside function <br>";
print_r($array);

?>