function simpleRec(i){
    if(i){
        console.log('simpleRec',i);
        simpleRec(i+1);
    }
}
simpleRec(-5);

function simpleRec1(i){
    if(i==1) return 1;  
    else return i*simpleRec1(i-1);
}
console.log('simpleRec1',simpleRec1(5));


const arr = [1,-1,2,-2,3,-3];
arr.filter(item=>{
    if(item>0) console.log(item);
})

const arr1=[];
arr.forEach(item=>{
    if(item) arr1.push(item);
})
console.log(arr1);

const arr3 = arr1.map(item=>{
    if(item>0) return item*10
    else return item*-1;
})
console.log(arr3);

const rez = arr1.reduce((item,item1)=>{
    return item*item1;
});

console.log(rez);

function* testGen(){
    let i = 0;
    while(i<5) yield i++;
}

let gen = testGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

class Man {
    constructor(old,name,gender){
        this.old = old;
        this.name = name;
        this.gender = gender;
    }

    printMan(){
        return `Man: y.o. ${this.old}, name ${this.name}, gender ${this.gender};`;
    }
}

const man = new Man(14,'Pasha','male');
console.log(man.printMan());

function PrintUser(login,password,callback){
    console.log(login, password);
    callback();
}

// PrintUser('1','2', ()=>{
//     setTimeout(()=>{ console.log('callback') }, 2000);
// });


for(let key in {1:1,0:0}){ console.log(key); }; 

let f = function(x){ console.log(x) };

(function(){ f('none') }());

testHello();

function testHello(){ console.log('hell'); };

let user = {
    hell: function(){ console.log(this); }
};
(user.bye = user.hell)();

let arr4 = [1,2,3,4,5];
console.log(arr4);
console.log(arr4.reduce((prev,item)=>{ console.log('prev ',prev,' item ',item); return Math.max(prev,item); }));

c.call(null);
function c(){ console.log(this) };

let a = [1,2];
(()=>{console.log(a)})()

const testArr = [1,2,3,4,5,6,7];
let temp=0;
for(let i in testArr){temp+=testArr[i]}; console.log(temp);
temp=0;
for(let i of testArr){temp+=i}; console.log(temp);

(function() {
    for (let i of arguments) {
      console.log(i);
    }
  })(1, 2, 3);

s.call(s);

function s(){ console.log(this); }

console.log(1+{ toString(){return '1'} }+1);

let a1=5;
function f1(){
    return new Function('b', 'return a1+b');
}
console.log(f1()(1));


function Smiles(str){
    let out='';
    for(let i=0;i<str.length;i++){
        str.toLowerCase().split(str[i].toLowerCase()).length-1>1?out+=')':out+='('; 
    }
    return out;
}

// function Smiles(str){
//         return str.toLowerCase().split('').map((symb,i,strTemp)=>{
//             return strTemp.indexOf(symb)==strTemp.lastIndexOf(symb)?'(':')';
//         }).join('');
// }

console.log(Smiles('GnFFFFFFFFwF'));

function camelCase(str){
    return str.split(' ').map(el=>{
        return el.split('').map((el,i)=>{
            return i==0?el.toUpperCase():el;
        }).join('');
    }).join('');
}

console.log(camelCase('hello case'))

function wordReverse(str){
    return str.split(' ').map(el=>{
        return el.length>4?el.split('').reverse().join(''): el;
    }).join(' ');
}

console.log(wordReverse('this is hello'));

console.log('----------------------------------------------');


function Ipv4(str){
    return (str.split('.').length==4)?(str.split('.').map(el=>{ 
        return (el>=0 && el<=255 && el===String(Number(el)))?el:false; }).join().indexOf(false)>=0)?false:true:false;
}

console.log(Ipv4('120.212.1.0'));

console.log('----------------------------------------------');

function arrayDiff(arr,arr2){
    return arr.filter(item=>{ return (!arr2.includes(item))?`${item}`:0; });
}

console.log(arrayDiff([1,2,2,2,3],[2]));
console.log(arrayDiff([19,0,19,-14,-20,17,20,17,4,11,-3,11,18,-4,19,-20,-19,-14,-19],[17,-4,19]));


console.log('----------------------------------------------');

console.log('10 11 12 13 14 15'.replace(/\d+/g,el=>{return parseInt(el)<13?'*':el}));

console.log('----------------------------------------------');

let testPar='artem';
function getTest(test){
    console.log(test+' '+this.testPar);
};
let testObj={testPar: 'sava'};
getTest('dodik');
getTest.call(testObj, 'dodik');
getTest.apply(testObj, ['down']);

console.log('----------------------------------------------');

// ((el)=>{console.log(el)})('hello')

// ((a,b)=>{alert(a+b)})(1,2)

// let somePar='hello';
// setTimeout((somePar=>{return ()=>{console.log(somePar)}})(somePar),1000);
// somePar='bb';

function pigIt(str){
    // upgrade solution, with 
    // return str.split(' ').map(el=>{
    //     if(RegExp('[,.!?;:()]').exec(el)!=null && el.length==1) return el;
    //     return (RegExp('[,.!?;:()]').exec(el)!=null && el.length>1)?el.replace(',',el[0]+'ay'+el[el.length-1]).substring(1):el.substring(1)+el[0]+'ay';
    // }).join(' ');

    //solution for codewars
    return str.split(' ').map(el=>/[,.!?;:()]/.exec(el)!=null?el:el.slice(1)+el[0]+'ay').join(' ');
}

console.log(pigIt('Hello world !')); 

console.log('----------------------------------------------');


function lastDigit(a,b){
    return ((BigInt(a)**BigInt(b))%10n).toString();
}

console.log(lastDigit('9','7'));

console.log('----------------------------------------------');

function factorial(n){
    // return ((n==1)?1:n*factorial(n-1)).toString();
    return ((BigInt(n)==1n)?1n:BigInt(n)*BigInt(factorial(n-1))).toString();
}

console.log(factorial(5))

function numbers(n){
    for(let i=2;i<n;i++){
        let temp = false;
        for(let j=2;j<=i;j++){
            if(i%j) continue;
            temp++;
        }
        (temp==1)&&console.log(i);
    }
}

// numbers(100);
// function TestStr(str){
//     return str||'empty str';
// }

// console.log(TestStr('1'));


// function MyTestObj(name,age){
//     this.name = name.toString();
//     this.age = Number(age);
// };

// MyTestObj.prototype.getName =function(){
//     return this.name;
// };

// MyTestObj.prototype.getAge =function(){
//     return this.age;
// };

// let hah = new MyTestObj('valera',14);
// console.log(hah.getAge());

function testSum(a) {
    return (b=0)=>{
      return (c=0)=>{
          return a+b+c;
      }
    };
  }

console.log(testSum(1)(1)(1));

console.log('---------------------------------------------------------');

function testStrs(str1,str2){
    // return str2.split('').map(el=>{return (str1.indexOf(el)<0 || str1.split(el).length-1<str2.split(el).length-1)?el+'$':el;}).join('').indexOf('$')<=0; 

    // for(let i=0;i<str2.length;i++)
    //     if(str1.split(str2[i]).length<str2.split(str2[i]).length) return false;
    // return true;
    return ![...str2].some(el=>str1.split(el).length<str2.split(el).length); //onelove
}

console.log(testStrs('scriptjava','javascript'));

console.log('---------------------------------------------------------');

function hashGen(str){
    // return (str=str.split(' ').map(el=>el.charAt(0).toUpperCase()+el.slice(1)).join('')).length>0&&str.length<140?'#'+str:false;
    return (str=str.split(' ').map(el=>el.charAt(0).toUpperCase()+el.slice(1)).join('')).length<140&&!!str?'#'+str:!1;
}

console.log(hashGen(' Hello there thanks for trying my Kata'));

console.log('---------------------------------------------------------');

function inBet(a,b){
    return (x)=>x>=a && x<=b;
}

function inArr(arr){
    return (x)=>arr.includes(x);
}

function byField(prop){
    return (a,b)=>a[prop]>b[prop]?1:-1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

console.log([1,2,3,4,5,6].filter(inBet(3,6)));
console.log([1,2,3,4,5,6].filter(inArr([1,2,10])));
console.log(users.sort(byField('name')));



function Counter(){
    let count=0;
    return ()=>count++;
}

let con = Counter();
console.log(con());
console.log(con());

console.log('------------------------------------------------------');

function alphanumeric(str){
    // return ![...str].filter(el=>/[\W_]/.exec(el)).length&&!!str;
    // return !/[\W_]/.exec(str); //имба но кодварс не принимает 1тест
    return !/[\W_]/.exec(str)&&!!str;
}

console.log(alphanumeric('asf1'));

console.log('------------------------------------------------------');

function codeReg2(str){
    return /[A-Za-z0-9]/.test(str)&&!/[\W_]/.exec(str)&&str.length>=6;
}

console.log(codeReg2('dI3'));

console.log('------------------------------------------------------');

// function errTest(str){
//     try{
//         console.log('prover0chka');
//         str.map();
//         // console.log(kik);
        
//     }
//     catch(e){
//         e instanceof TypeError?console.log(e+' soglasni yznali'):console.log(e+' kavo chto');
//     }
//     finally{
//         console.log('konec');
//     }
// }

// errTest();

function govTest(){
    (true)?(()=>console.log(true))():(()=>console.log(false))();
}

function govTest2(func1,func2){
    (false)?func1():func2();
}
govTest();
govTest2(()=>console.log(true),()=>console.log(false));

console.log('---------------------------------------------------------------')

const myTestObj = {
    name: "Artem",
    surname: "Kyh",
    old: "20",
    car: {
        model: "Reno logon",
        old: "20'th centery",
        color: "black",
        state: "ne bita ne krashena",
        some: {
            some1: "some1",
            some2: "some2",
            some3: "some3",
            some4: {
                some5: "some5",
                some6: "some6",
                tochtonado: "KRAAAA SAAA VEEEC"
            }
        }
    },
    info: ()=>myTestObj.name+' '+myTestObj.surname+' '+myTestObj.old
}


function govnokakoeto(obj){
    return Object.keys(obj[Object.keys(obj).filter(el=>typeof obj[el]=='object')]);
}



function govnokakoetoX2(){ //rofl
    let path='';
    return function govnokakoetoRec(obj,key){ 
        for(i in obj){
            if(key==i) return path+i;
            if(typeof obj[i]=='object'){
                path+=i+'.';
                return govnokakoetoRec(obj[i],key);
            } 
        }
        return false;
    }
}


console.log(govnokakoetoX2()(myTestObj,'tochtonado'));
let objobj={
    name: 'Artem',
    age: '20',
    some: {
        some1: '1',
        some2: '2'
    }
}
console.log();

function isEmpty(obj){
    return !Object.keys(obj).length;
}

// console.log(isEmpty({}));

function testObjSum(obj){
    let sum=0;
    for(let key in obj)
        if(typeof obj[key]=='number') sum+=obj[key];
    return sum;
}
// console.log(testObjSum({artem:1000,sava:1,some:'some'}))

let kikobj=Object.defineProperties({},Object.getOwnPropertyDescriptors(objobj));
console.log(kikobj.name);

let nullObj=Object.create(null);
nullObj.toString=function(){return Object.keys(this).join()};
Object.defineProperty(nullObj,'toString',{enumerable:false,writable:false,configurable:false})
nullObj.test='test'
nullObj.gg='gg';
// console.log(nullObj.toString());

function Chel(name,surname,age){
    this.info={
        name,
        surname
    }
    this.age=age;
}

let conObj = new Chel('sava','lacit',20);
console.log(conObj.constructor);
let conObj2 = new conObj.constructor('Artem','kk',20);
console.log(Object.getPrototypeOf(conObj2));

console.log('------------------------------------------------------');

function testPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve((new Date).getTime()),1000);
    }).finally(()=>console.log('finally')).then(result=>{console.log(result); return result;})
    .then(result=>{console.log(result); return result;})
}

// testPromise();

function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
// delay(2000).then(() => console.log('выполнилось через 3 секунды'));

let arrm = new Map();
function fetchTest(url,arr){
    return fetch(url).then(res=>res.json()).then(data=>{data.forEach((el,i)=>arr.set(i,el)); return data});
}
fetchTest('test.json',arrm);
console.log(arrm);

function* testGen(){
    yield Math.floor(Math.random()*100);
}


function testB(){
    console.log(arrm);
}

String.prototype.toBase64=function(){return btoa(this)};
String.prototype.fromBase64=function(){return atob(this)};


function toUnderscore(str){
//    return typeof str=='string'?!!str&&[...str].map(el=>el==el.toUpperCase()&&el!=Number(el)?'_'+el:el).join('').slice(1).toLocaleLowerCase():String(str);
    return str+''===str?[...str].map(el=>el==el.toUpperCase()&&(+el!=el)?'_'+el:el).join('').slice(1).toLocaleLowerCase():str+'';
}          

// console.log(toUnderscore('MoviesAndBo11oks'));

console.log('------------------------------------------------------');

function incrementString(str){
    // let rigth = [...str].filter(e=>+e==e);
    console.log([...str].filter(e=>!+e).some(e=>+e==e));
    return str.slice(0,str.indexOf([...str].filter(el=>+el)[0]))+(+[...str].filter(e=>+e==e).join('')+1);
    // return [...str].filter(e=>!+e).join('').replace(0,'')+[...+[...str].filter(e=>+e).join('')+1+''].join(''); //ne prohodit 1 srani test
    // return (str.indexOf(9)>0&&[...str].filter(e=>!+e).some(e=>+e==e)?[...str].filter(e=>!+e).slice(0,-1):[...str].filter((e,i)=>+e!=e||e==0&&i!=str.length-1)).join('')+[...+[...str].filter(e=>+e).join('')+1+''].join('');
}

console.log(incrementString('foobar009'));

function moveZeros(arr){
    return arr.filter(e=>e!==0).concat(arr.filter(e=>e===0));
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

function whoIsNext(arr,n){
    // if(n==1)
    //     return arr[0];
    // arr.push(arr[0],arr[0]);
    // arr=arr.slice(1);
    // return whoIsNext(arr,n-1);
    return n==1?arr[0]:arr.push(arr[0],arr[0])&&whoIsNext(arr.slice(1),n-1);
    // while(n!==1){
    //     arr.push(arr[0],arr[0]);
    //     arr=arr.slice(1);
    //     n--;
    // }
    // return arr[0];
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 25));

// 5 15 35 75 155 315


function ipsBetween(ip1,ip2){
    return ip2.split('.')[2]==1?256+(+ip2.split('.')[3])-ip1.split('.')[3]:ip2.split('.')[3]-ip1.split('.')[3];
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));


function weirdReverse(a){
    // return a.map((e,i)=>a[a.length-i-1]);//sLIshKoM MnOgO bYkV
    return a.sort(e=>-1);

}

console.log(weirdReverse([1,2,3,'a','b','c',[]]));
console.log(weirdReverse([1,2,3,4,5]));

function camelize(str){
    return str.split('-').map((e,i)=>i==0?e:e=e[0].toUpperCase()+e.slice(1)).join('');
}

console.log(camelize("background-color"));

function isMerge(s,p1,p2){
    // return [...p1].reduce((p,e)=>s.indexOf(e)!=-1)&&[...p2].reduce((p,e)=>s.indexOf(e)!=-1);
    // return [...p1+p2].filter(e=>s.indexOf(e)!=-1).length==s.length;
    return [...s].filter(e=>(p1+p2).indexOf(e)!=-1).length==(p1+p2).length&&(p1+p2).length==s.length;
}

console.log(isMerge('codewars', 'code', 'wars'));
console.log(isMerge('codewars', 'code', 'wasr'));
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(isMerge('codewars', 'cod', 'wars'));

function dblLinear(n) {
    let u=[1],x=0,y=0;
    while(u.length<=n){
        let uX=2*u[x]+1,uY=3*u[y]+1;
        uX<=uY?u.push(uX)&&x++&&uX==uY?y++:0:u.push(uY)&&y++;
    }
    return u;
}

console.log(dblLinear(30));

console.log('------------------------------------------------------------');

function nextSmaller(n){
    let arr=new Set();
    while(arr.size!=[...''+n].reduce((p,e,i)=>p*=i+1,1))
        arr.add([...''+n].sort(()=>Math.random()-0.5).join(''));
    return [...arr].filter(e=>e!=n&&e<n&&e[0]!=0).reduce((p,e)=>Math.max(p,e),-1);
    // slishkom dolgo slishkom ploho
    // const arr = [...''+n].map(e=>+e);
    // let i,max=9;
    // for(i=arr.length;i--;){
    //     if(arr[i]>max) break;
    //     max=arr[i];}
    // const pI=i;
    // const p=arr[pI];
    // if(i<0) return -1;
    // for(i=arr.length;i--;){
    //     if(arr[i]<p) break;}   
    // arr[pI]=arr[i];
    // arr[i]=p;
    // return arr[0]===0?-1:+arr.slice(0,pI+1).concat(arr.slice(pI+1).reverse()).join('');
    //Next lexicographical permutation algorithm polnaya parasha i nikogda bolshe ne bydy pisat' takoe
}

console.log(nextSmaller(1027));
console.log('------------------------------------------------------------');

function order(s){
    return s.split(' ').sort((a,b)=>[...a].find(e=>+e)-[...b].find(e=>+e)).join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));

console.log('------------------------------------------------------------');


function validParentheses(p){
    // return [...p].filter(e=>e==')').length==[...p].filter(e=>e=='(').length&&p[0]!=')'&&p[p.length-1]!='(';
    // let l=p.length;
    // for(let i=0;i<=l/2;i++)
    //     p=p.replace('()','');
    // return !p;
    // return p==p.replace('()','')?!p:validParentheses(p.replace('()',''));
    return p!=p.replace('()','')?validParentheses(p.replace('()','')):!p;
}
console.log(validParentheses(')(())'));

function findOutlier(n){
    return n.filter(e=>e%2==0).length<n.filter(e=>e%2).length?+n.filter(e=>e%2==0):+n.filter(e=>e%2);
}

console.log(findOutlier([0, 1, 2]));


function iqTest(s){
    return s.split(' ').filter(e=>e%2==0).length<s.split(' ').filter(e=>e%2).length?s.split(' ').indexOf(''+s.split(' ').filter(e=>e%2==0))+1:s.split(' ').indexOf(''+s.split(' ').filter(e=>e%2))+1;
}

console.log(iqTest("2 4 7 8 10"));

function uniqueInOrder(s){
    return [...s].filter((e,i)=>e!=s[i+1]);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

console.log('---------------------------------------------------------');

function anagrams(s,a){
    // return a.filter(e=>e.length==s.length).filter(e=>[...s].filter(i=>e.indexOf(i)!=-1).length==s.length).filter(e=>[...e].filter(i=>s.indexOf(i)!=-1).length==s.length);
    // return a.filter(e=>[...s].filter((j,i)=>e.indexOf(j)!=-1&&s.indexOf(e[i])!=-1).length==s.length&&e.length==s.length);
    // return a.filter((p,j)=>a.map(e=>{[...s].forEach(i=>e=e.replace(i,''));return e;})[j]=='');
    return a.filter(e=>[...e].sort().join('')==[...s].sort().join(''))
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

function countSmileys(s){
    return s.filter(e=>/[':;']/.exec(e)&&/[')D']/.exec(e)&&!/['o_']/.exec(e)&&e.length<4)
    // return s.filter(e=>e.length==2?/[:;]/.exec(e)&&/[)D]/.exec(e):/[:;]/.exec(e)&&/[)D]/.exec(e)&&/[-~]/.exec(e))
}

console.log(countSmileys([':---)', '))', ';~~D', ';D']));

function isPangram(s){
    return [...new Set([...s.toLocaleLowerCase()])].filter(e=>/[A-z]/.exec(e)).length==26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))

function validBraces(p){
    // return p!=p.replace('()','')?validParentheses(p.replace('()','')):!p;
    return p!=p.replace('()','').replace('{}','').replace('[]','')?validBraces(p.replace('()','').replace('{}','').replace('[]','')):!p;
}
console.log(validBraces('([{}])'));

function number9(n){
    let c=0;
    for(let i=0;i<=n;i++){
        if((''+i).indexOf('9')!=-1) c++;
    }
    return c;
}

console.log(number9(98));

console.log('---------------------------------------------------------');


function fromRgb(r,g,b){
    // return [r,g,b].map(e=>e<0?'00':e>255?'ff':(''+e).length==1?'0'+e.toString(16):e.toString(16)).join('').toUpperCase();
    return [r,g,b].map(e=>e<0?'00':e>255?'ff':e.toString(16)).map(e=>e.length==1?'0'+e:e).join('').toUpperCase();
}

console.log(fromRgb(8,151,211));

function fromHex(s){
    // let arr=[];
    // for(let i=1;i<s.length;i+=2)
    //     arr.push(s.substring(i,i+2));
    // arr=arr.map(e=>parseInt(e,16));
    // return {r:arr[0],g:arr[1],b:arr[2]};

    // let arr=s.slice(1).match(new RegExp('.{1,' + 2 + '}', 'g')).map(e=>parseInt(e,16));
    // return {r:arr[0],g:arr[1],b:arr[2]};
    return Object.fromEntries(s.slice(1).match(new RegExp('.{1,'+2+'}','g')).map((e,i)=>[(i==0?'r':i==1?'g':'b'),parseInt(e,16)]));
}

console.log(fromHex('#FF9933'));


function decoder(s,m) {
    // return s.substring(0,s.indexOf(m))+[...s.substring(s.indexOf(m)+1)].sort(e=>-1).join('');
    // return s.split(m)[0].concat(s.split(m)[1].split('').reverse().join(''))
    return s.split(m).filter((e,i)=>i%2==0).concat(s.split(m).filter((e,i)=>i%2==1).reverse().map(e=>[...e].reverse().join(''))).join('');
}

console.log(decoder("Lor-.tile gnicsipida rutetcesnoc ,tema tis rolod muspi me", '-'));


function zerosFact(n){
    let count=0;
    for(let i=5;i<=n;i*=5)
        count+=Math.trunc(n/i);
    return count;
}

console.log(zerosFact(12));

function n2n(n,k){
    return (''+n**n).slice((''+n**n).length-k);
}

console.log(n2n(5,3));

function rot13(s) {
    // return [...s].map(e=>e.replace(/[A-Za-z]/gi,String.fromCharCode(e.charCodeAt(0)+(e.toUpperCase()<'N'?13:-13)))).join('');
    return s.replace(/[A-Za-z]/gi,(e)=>String.fromCharCode(e.charCodeAt(0)+(e.toUpperCase()<'N'?13:-13)))
}

console.log(rot13('grfg'));


function searchSubstr(s,n,a){
        let t=s;
        while(t.indexOf(n)!=-1)
            t=t.replace(n,'');
        return (s.length-t.length)/n.length;
}

console.log(searchSubstr('aa_bb_cc_dd_bb_e', 'bb', true))

function findOdd(a){
    // return a.filter(e=>a.join('').match(new RegExp(e,'g')).length%2==1);
    return a.reduce((p,e)=>p^e);
}

console.log(findOdd([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ]));


function willFit(p,b){
    // return p.filter((e,i)=>e>=b[i]).length<2;
    // return b.filter((e,i)=>e>p[i]).length>=2&&p.reduce((a,b)=>Math.min(a,b))<b.reduce((a,b)=>Math.min(a,b));
    // return b.filter((e,i)=>e>p[i]).length>=2&&Math.min.apply(0,p)<Math.min.apply(0,b);
    return b.every(e=>e>Math.min.apply(0,p))?b.filter((e,i)=>e>p[i]).length>=2:!1;
}

console.log(willFit([ 10, 10, 10 ],[ 50, 50, 4 ]));

function duplicateCount(s){
    // return new Set([...s.toLowerCase()].filter(e=>s.toLowerCase().replace(e,'').indexOf(e)!=-1)).size;
    return [...s.toLowerCase()].filter(e=>s.toLowerCase().indexOf(e)!=s.toLowerCase().lastIndexOf(e))
}

console.log(duplicateCount("aabBcde"));


function encryptThis(s){
    return s.split(' ').map(e=>[...e].map((j,i)=>i==0?j.charCodeAt():i==1?e[e.length-1]:i==e.length-1?e[1]:j).join('')).join(' ');
}

console.log(encryptThis("hello world"));

function decipherThis(s){
    return s.split(' ').map(e=>String.fromCharCode([...e].filter(e=>+e==e).join(''))+[...e].filter(e=>+e!=e).map((j,i)=>i==0?e[e.length-1]:i==[...e].filter(e=>+e!=e).length-1?[...e].filter(e=>+e!=e)[0]:j[0]).join('')).join(' ')
}; 

console.log(decipherThis('72olle 103doo 100ya'));

function breakCamelCase(s){
    return [...s].map(e=>e<'a'?' '+e:e).join('');
}

console.log(breakCamelCase('camelCasing'));

function findUniq(a){
    // return +a.filter(e=>a.indexOf(e)==a.lastIndexOf(e));
    return +a.filter((e,i)=>i==a.lastIndexOf(e));
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));


function isPrime(n){
    return n>1&&n!=2&&n!=3?n%2||n%3==0?!1:!!1:!1;
}

console.log(isPrime(13))
  