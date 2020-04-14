function dateSec(){
    let nextDay = new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate()+1);
    return Math.round((nextDay-(new Date))/1000);
}

console.log(dateSec());