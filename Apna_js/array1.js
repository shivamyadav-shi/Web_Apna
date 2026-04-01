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