<?php

class Chef {
    function makeChicken(){
        echo "The chef can make Chicken";
    }
    function makeSalad(){
        echo "The chef can make Salad";
    }
    function makeSpecialDish(){
        echo "The chef can make Special Dish";
    }
}

class ItalianChef extends Chef {
    function makePasta(){
        echo "The italian chef can make Pasta";
    }
}

class newChef extends ItalianChef {
    
    function makeSpecialDish(){
        parent :: makeSpecialDish();
        echo "<br>";
        echo "The new chef can not make Special Dish";
    }
}

$chef = new Chef();
$chef->makeSpecialDish();
echo "<br><br>";

$italianChef = new ItalianChef();
$italianChef->makeSpecialDish();
echo "<br><br>";

$newChef = new newChef();
$newChef->makeSpecialDish();

?>