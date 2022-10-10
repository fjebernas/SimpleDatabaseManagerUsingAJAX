<?php
    include("./connection.php");

    $sqlQuery = 'SELECT * FROM Characters';
    $result = $connection -> query($sqlQuery);

    if ($result -> num_rows > 0) {
        while ($row = $result -> fetch_assoc()) {
            echo '<tr>';
            echo    '<td>' . $row['CharacterID'] . '</td>';
            echo    '<td>' . $row['Name'] . '</td>';
            echo    '<td>' . $row['Element'] . '</td>';
            echo    '<td>' . $row['Region'] . '</td>';
            echo    "<td><button type='button' class='delete-btn' id='" . $row['CharacterID'] . "'>Delete</button></td>";
            echo '</tr>';
        }
    } else {
        echo "<tr><td colspan='5'>No data available</td></tr>";
    }

    $connection -> close();
?>