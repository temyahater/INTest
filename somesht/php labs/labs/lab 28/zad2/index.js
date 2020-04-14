function sorfForOne(arr,number){
    arr.forEach((el,i)=>{el.forEach((el,j)=>{el%number==0?console.log(i,j):0;});});
}

// return arr.filter(el=>{
//     return el.filter(el=>{ return el>number?el:0; }).length>0?el.filter(el=>{ return el>number?el:0; }):0;
// });

sorfForOne([[1,2,3,4],[1,2,3],[1,2]],2);