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

PrintUser('1','2', ()=>{
    setTimeout(()=>{ console.log('callback') }, 2000);
});


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
