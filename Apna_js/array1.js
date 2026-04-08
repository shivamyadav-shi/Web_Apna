let name=["shivam", "alok", "shraddha", "vishal"];
console.log(name);
name[0]="shiv";
console.log(name[0][0]);
console.log(name[0].length);
console.log(name);
console.log(name.length);
//add to end
name.push("rohit");
//add to start
name.unshift("rahul");
console.log(name);
// delete from ends & return
name.pop();
console.log(name);
// delete from start
name.shift();
console.log(name);
let monthArray = ["january", "july", "march", "august"];
//  target array=["july", "june", "march", "august"]
monthArray.shift();
monthArray.shift();
console.log(monthArray);
monthArray.unshift("june");
monthArray.unshift("july");
console.log(monthArray);

// array methods
console.log(monthArray.indexOf("july"));
console.log(monthArray.indexOf("january"));

console.log(monthArray.includes("july"));
console.log(monthArray.includes("january"));

let primary=["red", "blue", "yellow"];
let secondary=["orange", "violet","green" ];
console.log(primary.concat(secondary));

console.log(primary.reverse());

let colors=["red", "pink","yellow","green","black","orange"];
console.log(colors);
console.log(colors.slice(4));
colors.slice(3,2);
console.log(colors);

let color=colors.slice(1,3,"white","magenta","skyblue");
console.log(color);

for(let i=1;i<=5;i++){
    console.log(i);
}
let arrayy=[1,2,3,4,5,6,7,8,9];
arrayy.splice(0);

// Loops

for(let i=1;i<=10;i++){
    console.log(i);
}

for(let o=1; o<=50;o++){
    if(o%2==0){
        console.log(" ");
    }
    else{
        console.log(o);
    }
}

for(let o=1; o<=50;o++){
    if(o%2==0){
        console.log("even:",o);
    }
    else{
        console.log("");
    }
}

for(let i=3;i<=30;i=i+3){
    console.log(i);
}

// let n=prompt("enter your number");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

let ii=1;
while(ii<=5){
    console.log(ii);
    ii++;
}



let fruits=['mango','apple', 'banana','litchi','orange'];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

let superHeroes = [["ironman","superman","thor"],["spiderman","wonder woman","flash"]];
for(let i=0;i<superHeroes.length;i++){
    for(let j=0;j<superHeroes[i].length;j++){
        console.log(superHeroes[i][j]);
    }
}
const favMov="avatar";
let guess=prompt("My favourite movie");
while(guess!= favMov && guess!= "quit"){
    console.log("wrong");
    guess=prompt("guess again");
}