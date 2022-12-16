<?php
$name = $_POST["Name"];
$mail = $_POST["Mail"];
$massage = $_POST["Msg"];

$cnt = count (glob ('*.txt'));
$fname = ( $cnt + 1) . '.txt';

$file = fopen("$fname","w");
echo fwrite($file,"NAME: " . $name . " \r\n");
echo fwrite($file,"EMAIL: " . $mail . " \r\n");
echo fwrite($file,"MASSAGE: " . $massage . " \r\n");
fclose($file);
header('Location: ' . $_SERVER['HTTP_REFERER']);
?>