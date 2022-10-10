<?php
    include("./connection.php");

    $characterID = $_POST['characterID'];
    $name = $_POST['name'];
    $element = $_POST['element'];
    $region = $_POST['region'];

    $sqlQuery = 'UPDATE Characters SET Name=' . '\'' . $name . '\'' . "," . 'Element=' . '\'' . $element . '\'' . "," . 'Region=' . '\'' . $region . '\'' . 'WHERE CharacterID=' . $characterID;
    if ($result = $connection -> query($sqlQuery)) {
        echo 'Query success: ';
        echo $sqlQuery;
    } else {
        echo "edit epic fail! this is from editRow.php";
    }
    $connection -> close();
?>