<?php

function test($str){
    $out = new SplObjectStorage();
    function srav($str1,$str2){
        for($i=0;$i<$str1.ob_get_length();$i++){
            echo $str1[$i];
        }
    }
    srav("priva","man");
}

test(['priva','man','gyp']);

?>