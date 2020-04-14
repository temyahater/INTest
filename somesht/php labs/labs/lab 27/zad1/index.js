function findMax(...args){
    return args.reduce((prev,item)=>{ return Math.max(prev,item); });
}

console.log(findMax(1,2,3,4,5,6));