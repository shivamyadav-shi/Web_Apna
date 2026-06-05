let string = "apple";
console.log(string[0]);
if ((string.length > 3) && (string[0]==='a')){
    console.log("a good string");
}else{
    console.log("not a good string");
}

let num=12;
if((num%3 ===0) && ((num + 1 ==15) || (num-1== 11))){
    console.log("Safe");
} else{
    console.log("Unsafe");
}