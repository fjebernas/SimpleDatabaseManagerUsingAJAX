<?php
    include("./connection.php");

    $name = $_POST['name'];
    $element = $_POST['element'];
    $region = $_POST['region'];

    $sqlQuery = "INSERT INTO Characters(Name, Element, Region) VALUES(" . '\'' . $name . '\'' . "," . '\'' . $element . '\'' . "," . '\'' . $region . '\'' . ");";
    if ($result = $connection -> query($sqlQuery)) {
        echo 'Query success: ';
        echo $sqlQuery;
    } else {
        echo "insert epic fail! this is from insert.php";
    }
    $connection -> close();
?>