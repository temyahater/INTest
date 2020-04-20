<?php

function arr($strArr)
{
    $tempArr = array();
    $answer = array();
    foreach($strArr as $el){
        foreach(str_split($el) as $c)
            if(!in_array($c,$tempArr) && !in_array($c,$answer)) array_push($answer, $c);
        foreach(str_split($el) as $c)
            if(!in_array($c,$tempArr)) array_push($tempArr, $c);
    }
    return $answer;
}

$temp = ["Savinov", "lox", "bebebe", "lox", "loxness"];

print_r($temp);
echo "<br>";
print_r(arr($temp));

?>