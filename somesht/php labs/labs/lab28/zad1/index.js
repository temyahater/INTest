function arrPosit(...arr){
    return arr.filter(el=>{ return el>0?el:0; });
}

console.log(arrPosit(1,-2,3,-4,5));