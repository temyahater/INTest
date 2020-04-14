function findMaxInd(i,...args){
    if(args[i]==args.reduce((prev,item)=>{ return Math.max(prev,item); })) console.log(i);
    else findMaxInd(++i,...args);
}
findMaxInd(0,1,2,3,4,5,6);