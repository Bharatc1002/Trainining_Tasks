<?php

class NewClass {
    public static $text = "static text";
    public static function classFunc(){
        return self::$text;
    }
}

echo NewClass::$text;
echo "<br>";
echo NewClass::classFunc();

?>