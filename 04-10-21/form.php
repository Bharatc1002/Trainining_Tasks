<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<form action="form.php" method="post">
    <input type="text" name="text">
    <input type="submit" name="submit" value="submit">
</form>

<?php

if(isset($_POST['submit'])){
    echo $_POST['text'];

}

?>
</body>
</html>