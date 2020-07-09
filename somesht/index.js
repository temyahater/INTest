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