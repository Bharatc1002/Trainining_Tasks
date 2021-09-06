<?php

class Test {
    public function __construct($param1, $param2, $param3) {
        echo $param1.$param2.$param3;
    }
}

class SubTest extends Test {
    public function __construct() {

    }

    public function new($param1, $param2, $param3) {
        parent::__construct($param1, $param2, $param3);
    }
}

$ob = new SubTest();
$ob->new('p1', 'p2', 'p3');

?>