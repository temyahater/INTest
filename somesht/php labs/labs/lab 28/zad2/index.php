<?php

function sortForOne($arr,$number){
    // array_walk($arr,function($el,$i){
    //     echo $number;
    //     array_walk($el,function($el,$j){ 
    //         if($el%1==0) echo(1);
    //      });
    // });

    for($i=0;$i<count($arr);$i++){
        for($j=0;$j<count($arr[$i]);$j++){
            if($arr[$i][$j]%$number==0) echo ("<br />".$i." ".$j);
        }
    }
}
sortForOne(array(array(1,2,3,4),array(1,2,3),array(1,2)),3);
?>