<?php
    include("./connection.php");

    $sqlQuery = 'SELECT * FROM Characters';
    $result = $connection -> query($sqlQuery);

    if ($result -> num_rows > 0) {
        while ($row = $result -> fetch_assoc()) {
            echo '<tr>';
            echo    "<td class='td_characterID'>" . $row['CharacterID'] . '</td>';
            echo    "<td class='td_name'>" . $row['Name'] . '</td>';
            echo    "<td class='td_element'>" . $row['Element'] . '</td>';
            echo    "<td class='td_region'>" . $row['Region'] . '</td>';
            echo    "<td class='td_buttons'>
                        <button type='button' class='edit-btn'>Edit</button>
                        <button type='button' class='delete-btn' id='" . $row['CharacterID'] . "'>Delete</button>
                    </td>";
            echo '</tr>';
        }
    } else {
        echo "<tr><td colspan='5'>No data available</td></tr>";
    }

    $connection -> close();
?>