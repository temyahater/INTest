function sideDig(arr){
    return arr.map((el,i)=>{ return el[el.length-i-1]; })
}
console.log(sideDig([[1,2,3],[4,5,6],[7,8,9]]));