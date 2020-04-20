<?php

function findMax(...$params){
    return array_reduce($params,function($prev,$item){ return max($prev,$item); });
}
echo findMax(1,2,7,4,5,6);

?>
