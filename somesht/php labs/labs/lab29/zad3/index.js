function test(str){
    let out = new Set();
    function srav(str1,str2){
        str1.split('').forEach(el=>{ if(str1!=str2) if(str2.lastIndexOf(el)!=-1) out.add(el); });
    }
    str.forEach((el)=>{ str.forEach((item)=>{ srav(el,item); }); });
    return out;
}
console.log(test(['Savinov', 'lox', 'bebebe', 'lox', 'loxness']));