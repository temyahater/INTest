<?php 
$number = $_POST["user"];
settype($number, "integer");
$counter = 0;
while($number!=0){
    if($number%2==0) $counter++;
    $number = floor($number/10);
}
echo $counter;
?>