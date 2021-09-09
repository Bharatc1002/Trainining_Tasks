<?php

interface getId {
    public function current();
}

interface getName {
    public function current();
}

class Details implements getId, getName {
    public function current(){
        return "working";
    }
}

$obj = new Details;
echo $obj->current();


?>