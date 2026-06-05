let todo =[];
let req=prompt("please enter your request");
while(true){
    if(req =="quit"){
        console.log("quitting todo");
        break;
    }
    if(req=="list"){
        console.log("---------------------------------------------");
        // for(let list of todo){
        //     console.log(list);
        
        // }
       for(let idx=0;idx<todo.length;idx++){
            console.log(idx,todo[idx]);
        }
        console.log("----------------------------------------------");
    }
    else if (req=="add"){
            let task=prompt("enter your task");
            todo.push(task);
            console.log("task added successfully");
        }
        // else if(req =="delete"){

        // }
    else if(req="delete"){
        let idx=parseInt(prompt("enter your index"));
        todo.splice(idx,1);
    console.log("successfully deleted");
    }
        req=prompt("please enter your request");
}