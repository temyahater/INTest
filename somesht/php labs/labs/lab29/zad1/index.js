function findStr(str){
    str.split('').reduce((prev,el,i)=>{ return ((prev=='ч' || prev=='щ')&&el=='у')?console.log(i-1):el; });
}
findStr('чубачукщуа');