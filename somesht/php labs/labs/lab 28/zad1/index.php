<?php

function arrPosit(...$arr){
    return array_filter($arr,function($el){ return $el>0?$el:0; });
}
array_walk(arrPosit(1,-2,3,-4,5),function($el){ echo $el; });

?>