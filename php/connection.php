<?php
    $host = 'localhost';
    $port = '3307';
    $username = 'root';
    $password = '';
    $database = 'GenshinImpact';

    $connection = new mysqli($host . ':' . $port, $username, $password, $database);
?>