<?php

$arr = ["one", "two", "three", "four"];

function valueChanger($ary){
    $len = count($ary);
    $ary[$len-1] = "five";
    return $ary;
}

print_r(valueChanger($arr));
echo "<br>";
print_r($arr);


?>