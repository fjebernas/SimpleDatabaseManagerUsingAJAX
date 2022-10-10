<?php
    include("./connection.php");

    $rowID = $_POST['characterID'];

    $sqlQuery = 'DELETE FROM Characters WHERE CharacterID = ' . $rowID;
    if ($result = $connection -> query($sqlQuery)) {
        echo 'Query success: ';
        echo $sqlQuery;
    } else {
        echo "delete epic fail! this is from deleteRow.php";
    }
    $connection -> close();
?>