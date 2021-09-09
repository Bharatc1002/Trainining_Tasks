<?php

 $i = 1;
class newClass {
   
    function current(){
        while ($i<=10) {
            yield $i;
            $i++;
           }
        }
    function complete(){
        return "this is from return keyword";
    }
   }
   
$getClass = new newClass;
$new = $getClass->current();
foreach($new as $arg){
    echo $arg . "<br>";
}
echo $getClass->complete();
   


?>