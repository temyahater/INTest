<?php

function sideDig($arr){
    // return array_map(function($el,$i){return $el;},$arr);
    array_walk($arr,function($el,$i){ echo "<h2>".$el[count($el)-$i-1]."</h2>"; });
}

sideDig([[1,2,3],[4,5,6],[7,8,9]]);

?>