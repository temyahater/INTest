<?php

function dataSec(){
    return 86400-(strtotime(date('h:i:sp'))%86400);
}
echo dataSec();
?>