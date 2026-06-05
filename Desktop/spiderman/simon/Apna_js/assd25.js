let arr = [1,2,3,4,5,6,7,8];
let newArr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]>=3){
        newArr.push(arr[i]);
    } 
}
console.log(newArr);

let arr1=[8,9,10,1,2,3,4,5,6,7];
let num= 5; 
//elements larger than a number num  
function getElements(arr1,num)
{for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]>num)
            {
                console.log(arr1[i]);
}
}
}
getElements(arr,num);

let str = "abbsdjsajfbvcb";
function uChar(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let currChar = str[i];
        if(ans.indexOf(currChar)==-1){
            ans+=currChar;
        }
    }
    return ans;
}
uChar(str);
console.log(uChar(str));

const sum=(a,b)=> {
    console.log(a+b);
}
sum(2,5);

const cube=(n)=>{
    return n*n*n;
}
console.log(cube(3));

const pow=(a,b)=>{
    console.log(a**b);
}
pow(2,5);

const mul=(a,b)=>(
    a*b 
)

console.log(mul(4,5));

const sub =(a,b)=> a-b;

console.log(sub(9,5));

console.log("hi there");

// setTimeout(()=> {
//     console.log("hello shivam");
//     },10000
// );

console.log("namsate");

let id=setInterval (()=>{
console.log("hello shivam");
clearInterval(id);
},2000)
console.log(id);


const student={
    name:"shivam",
    age:23,
    properties:this,
    getname:function(){
       return this.name
    }
};

console.log(student.getname());

const squ=(n)=> n*n;
console.log(squ(2));

let id1 =setInterval(()=>{
console.log("hellow shivama")}
    ,2000)

setTimeout(()=>{
    clearInterval(id1)},10000

);

let arrray = [
    {
        name:"shivam",
        marks:95
    },
     {
        name:"shraddha",
        marks:91
    },
     {
        name:"aditya",
        marks:98
    },
    
]
arrray.forEach(element => {
    console.log(element.marks);
});

let number=[1,2,3,4];
let double=number.map((el)=>{
    return el*2;
}
)
console.log(double);
let squaree=number.map((el)=>{
    return el*el;
}
)
console.log(squaree);

let gpa=arrray.map((studen)=>{
    return studen.marks/10;
})
console.log(gpa);

let numss=[1,2,4,6,5,7,8,9];
let even=numss.filter((num)=> (num%2 == 0));
console.log(even);

[1,2,3,4].every((el)=> (el%2 == 0));
// false

[1,2,3,4].reduce((res,el)=> (res+el));
// 10

let nummms=[1,2,4,5,8,9];
let result=nummms.reduce((max,el)=>{
    if(max>el){
        return max;
    } else{
        return el;
    }
})
console.log(result);

[10,20,30,40].every((el)=> el%10==0);