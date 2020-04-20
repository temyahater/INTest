<?php

function findMaxInd($i,...$params){
    if($params[$i]==array_reduce($params,function($prev,$item){ return max($prev,$item); })) echo $i+1;
    else findMaxInd(++$i,...$params);
}
echo findMaxInd(0,1,2,7,4,5,6);

?>