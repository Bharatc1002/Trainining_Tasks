<?php

class Room {
    public $height;
    public $width;

    function __construct($aHeight, $aWidth){
        $this->height = $aHeight;
        $this->width = $aWidth;
        
    }

}

class Bad extends Room {
    
}

$bad1 = new Bad(200, 300)
$bad1->height;

?>