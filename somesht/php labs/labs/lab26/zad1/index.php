<?php 
$a = $_POST["a"];
$b = $_POST["b"];

$sum = (2/($a*$a+25)+$b)/(sqrt($b)+($a+$b)/2);
echo "<input type='text' value='$sum'/>";
?>