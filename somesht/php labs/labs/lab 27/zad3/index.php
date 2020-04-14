<?php

function findMaxInd($i,...$params){
    if($params[$i]==array_reduce($params,function($prev,$item){ return max($prev,$item); })) echo $i;
    else findMaxInd(++$i,...$params);
}
echo findMaxInd(0,1,2,3,4,5,6);

?>