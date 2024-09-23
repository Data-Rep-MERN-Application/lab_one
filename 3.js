// this will create an empty array called myTasks
let myTasks = [];

let addTasks = (task)=>{
    myTasks.push(task);
    console.log(task+" has been added to my Tasks!");
    return myTasks.length;
}

//c
let listAllTasks = ()=>{
    myTasks.forEach((item)=>{
        console.log(item);
    })
}

let deleteTask = (task)=>{

    let index = myTasks.indexOf(task);
    if(index > -1){
        myTasks.splice(index,1);
        console.log(task +" has been deleted!");
    } else {
        console.log(task +" not found in my Tasks.")
    }
    return myTasks.length;
}




addTasks("Work");
addTasks("Eat");
addTasks("Sleep");
listAllTasks();
deleteTask("Work");
deleteTask("Run");

