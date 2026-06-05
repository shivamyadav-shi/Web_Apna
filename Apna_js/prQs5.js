let arr=[1,2,3,4,5,6,2,3];
let n=2;
let l;
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==n){
        arr.splice(i,1);
        l=arr.length;
    }
    count=count + arr[i];
}
console.log(arr);
console.log(l);
console.log(count);
let number=250678;
let co=0;
let cot =number;
let sum=0;
while(cot>0){
    co++;
    cot=Math.floor(cot/10);
    // co=co+cot;
    
}
console.log(co);
let digit;
cot=number;
while(cot>0){
    digit=number%10;
    sum=digit+sum;
    cot=Math.floor(cot/10);
}
console.log(sum);

let nm=5;
let fact=1;
for(let i=nm;i>0;i--){
    if(nm==0 && nm==1){
        fact=1;
    } else{
        fact=fact*i;
    }
}
console.log(fact,"Factorial");

let arrr=[1,2,3,4,5,6,7];
let gr;
for(i=0;i<arrr.length;i++){
    if(arrr[i]<arrr[i+1]){
        gr=arrr[i+1];
    } else{
        gr=arrr[i];
    }
}
console.log(gr);