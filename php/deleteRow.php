<?php
    include("./connection.php");

    $rowID = $_POST['characterID'];

    $sqlQuery = 'DELETE FROM Characters WHERE CharacterID = ' . $rowID;
    if ($result = $connection -> query($sqlQuery)) {
        echo "delete success! this is from deleteRow.php";
    } else {
        echo "delete epic fail! this is from deleteRow.php";
    }
    $connection -> close();
?>