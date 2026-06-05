let inp = document.querySelector("#text");

inp.addEventListener('input', function(){
    console.log(inp.value);
    let para = document.querySelector("p");
    para.innerText= inp.value;
})