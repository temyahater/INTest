<?php

function findStr($str){
    array_reduce(str_split($str),function($prev,$el){ if(($prev=='c' || $prev=='s')&&$el=='y') echo $prev."".$el." "; return $el; }); 
}
findStr("cybacyksya");

?>