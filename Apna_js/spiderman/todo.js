let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

// let listItem=document.querySelectorAll("li");

btn.addEventListener("click", function(){
    // console.log("input");
    let item=document.createElement("li");
    item.innerText =  inp.value;
    // console.log(inp.value);
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});
ul.addEventListener("click", function(event){
   if(event.target.nodeName=="BUTTON"){
        let lis = event.target.parentElement;
        lis.remove();
        console.log("Deleted");
   }
})
// let delBtns= document.querySelectorAll(".delete");
// for(delB of delBtns){
//     delB.addEventListener("click", function(){
//         // console.log("element deleted");
//         let par = this.parentElement;
//         // console.log(par);
//         par.remove();
//     })
// };

