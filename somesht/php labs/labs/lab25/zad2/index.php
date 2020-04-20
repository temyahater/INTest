<?php 
$counter = 0;
for($i=100;$i<1000;$i++)
if(($i%10+floor($i/10)%10+floor($i/100))%7==0 && $i%7==0) echo $i," ";
?>