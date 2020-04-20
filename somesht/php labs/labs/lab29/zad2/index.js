function replStr(str,i){
    return str = str[i]+str.substring(0,i)+str.substring(i+1);
}
console.log(replStr('priva',4));