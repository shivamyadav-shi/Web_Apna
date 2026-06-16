const num=prompt("enter range");
let random=Math.floor(Math.random()*num)+1;
let gue=prompt("enter your number");

while (true) {
    if (gue == "quit") {
        console.log("user quit");
        break;
    }
    if (gue == num) {
        console.log("Right guess");
        break;
    } else { prompt("your guess was incorrect"); }
}