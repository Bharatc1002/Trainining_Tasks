<?php


class Book {
    function f1(){
        echo "f1 function";
    }
}

trait Reader {
    function f2(){
        echo "f2 function";

    }
}

class BookReader extends Book {
    use Reader;
    function f3(){
        echo "f3 function";
    }
}

$obj = new BookReader;
$obj->f1();
$obj->f2();
$obj->f3();


?>