<?php
function thenDate($number){
    return date('d-m-Y',strtotime(date('d-m-Y'))+($number*86400));
}
echo thenDate(1);
?>