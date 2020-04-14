function test(str){
    let out = new Set();
    function srav(str1,str2){
        str1.split('').forEach(el=>{ if(str1!=str2) if(str2.lastIndexOf(el)!=-1) out.add(el); });
    }
    str.forEach((el,i)=>{ str.forEach((item,j)=>{ srav(el,item); }); });
    return out;
}
console.log(test(['priva','man','gyp']));