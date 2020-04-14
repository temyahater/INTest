function getTimetable(date){
    let timetable=[];
    for(let i=0;i<31;i+=3){
        if(date.getDay()==0) date.setDate(date.getDate()+1)
        timetable.push(new Date(date));
        date.setDate(date.getDate()+3);
    }
    return timetable;
}

console.log(getTimetable(new Date));