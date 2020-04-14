function thenDate(number){
    let date = new Date;
    date.setDate(date.getDate() + number);
    return date;
}
console.log(thenDate(1));