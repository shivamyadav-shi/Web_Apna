// console.dir(document);
// document.all[8].innerText="Peter Parker";
// document.getElementById("description");
// let smallImg=document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImg.length;i++){
//     smallImg[i].src="assets/spiderman_img.png"
//     console.log("img changed successfully");
// }
// // smallImg.src="assets/creation_1.png";
// console.dir(document.querySelector("div a"));


let para1=document.createElement('p');
para1.innerText="Hey i am red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement('h3');
h3.innerText='Hey I am Blue';
document.querySelector('body').append(h3);

h3.classList.add('blue');

let div=document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');
h1.innerText='I am in a div';
para2.innerText="Me too";
// div.innerText="Div";

div.append(h1);
div.append(para2);

document.querySelector('body').append(div);
div.classList.add('boxD');

let button=document.querySelector("button");
console.dir(button);
button.onclick=function(){
    console.log("button was clicked");
    alert("Button was clicked");
}

let inp = document.querySelector("input");
console.log("input");
inp.addEventListener('keydown',function(){
    // console.log("Key was pressed");
    console.log(event.code);
    // console.log(event.key);
    if(event.code =='ArrowUp'||event.code =='KeyU'){
        console.log("Move Forward");
    } else if(event.code =='ArrowDown'||event.code =='KeyD'){
        console.log("Move backward");
    } else if(event.code =='ArrowLeft'||event.code =='KeyL'){
        console.log("Move left");
    } else if(event.code =='ArrowRight'||event.code =='KeyR'){
        console.log("Move right");
    }
})
let form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("Submitted successfully");
    let user= document.querySelector("#user");
    let pass= document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`Your user name is ${user.value}, and password is ${pass.value}.`);
})
