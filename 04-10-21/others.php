<?php

// math functions
echo pi(). "<br>";
$math1 = [0, 150, 30, 20, -8, -200];
echo min($math1)."<br>";
echo max($math1)."<br>";

// increament/decreament operators
$i = 1;
$j = 1;
echo $i++."<br>"; //post increament
echo ++$j."<br>"; //pre increament

// if...else...elseif statement
$var = 10;
if($var>15){
    echo $var . " is greater than 15.";
} else if($var==15){
    echo $var . " is equal to 15.";
} else {
    echo $var . " is less than 15.";
}
echo "<br>";

//switch statement + Break

$favcolor = "red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}
echo "<br>";

//Loops

for($k=1;$k<=5;$k++){
    echo $k."<br>";
}
$a = 1;

while($a<=3){
    echo $a."<br>";
    $a++;
}

$s = 0;
do{
    $s++;
    echo $s."<br>";
} while($s<5);

$arr = ["one", "two", "three"];
foreach($arr as $el){
    echo $el."<br>";
}

//Break...continue

for($ls=1;$ls<4;$ls++){
    if($ls == 2){
        continue;
    } else {
        echo $ls."<br>";
    }
}

?>