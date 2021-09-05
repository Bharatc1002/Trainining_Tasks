<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label for="radius">Enter the radius of circle : </label>
        <input type="text" name="radius">
        <br><br>
        <input type="submit" name="submit" value="submit">
    </form>
</body>
</html>

<?php

if(isset($_POST["submit"])){

function circumtance($r){
    return 2*3.14*$r;
}

$radius = $_POST["radius"];
$circumtance =  circumtance($radius);
echo "circumtance of circle is : $circumtance";


}

?>