<?php

function repStr($str,$i){
    return $str=$str[$i].substr($str,0,$i).substr($str,$i+1);
}
echo repStr("priva",4);
?>

