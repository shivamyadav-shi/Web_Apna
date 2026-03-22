// alert("Something wrong");
console.error("an error occured");
console.warn("warning$$");
let f_Name=prompt("enter yout name");
console.log(f_Name);
let Roll_No=prompt("enter yout roll no");
console.log(Roll_No);
let fi_Name=prompt("enter yout name");
console.log(f_Name);
let l_Name=prompt("enter yout surname");
console.log(f_Name);
let fullName = fi_Name + " "+l_Name;
console.log(fullName);
alert("Welcome"+fullName)
let nameA = prompt("Enter your name");
let ageA = prompt("enter your age");
// alert(nameA +" is " + ageA+ " year old" );
alert(`${nameA} is ${ageA} year old`);
let number = 1;
switch(number){
    case 1:
        console.log("January, Februay, March");
        break
    case 2:
        console.log("April, May, June");
        break
    case 3:
        console.log("July, August, September");
        break
    case 4:
        console.log("october, november,december");
        break
    default:
        console.log("not a valid quarter");
}
let strr= prompt("Enter golden string");
if((strr.length > 5) && ((strr[0] ==='A')||(strr[0] === 'a'))){
    console.log("The above string is a golden string");
} else{
    console.log("Not a golden string");
}

let an =prompt("enter first number");
let bn =prompt("enter second number");
let cn =prompt("enter third number");
if(an>bn){
    if(an>cn){
        console.log(an+" is the greatest one");
    } else{
        console.log(cn+" is the greatest one")
    }
} else{
    if(bn>cn){
        console.log(bn+" is the greatest one");
    }else{
        console.log(cn+" is the greatest one");
    }
}


