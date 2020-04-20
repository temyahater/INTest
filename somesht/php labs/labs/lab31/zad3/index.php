<?php

function getTimetable($myDate){
    $timetable = array();
    $dat = strtotime($myDate);
    for($i=0;$i<31;$i+=3){
        $temp =  getdate($dat);
        if($temp['wday']=='0') $dat+=86400;
        array_push($timetable,date('d-m-Y',$dat));
        $dat+=259200;
    }
    print_r($timetable);
}

getTimetable(date('d-m-Y'));

?>