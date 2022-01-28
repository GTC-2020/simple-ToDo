const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "Todo",
}

    function changeStatus(task, progress){
        if(task in list)
         list[task] = progress;
    }

  function  addTask(task){
        list[task] = 'Todo';
    }

   function  deleteTask(task){
        delete list[task];
    }
  function showList(){
    let toDo = "Todo: \n";
    let inProgress = "In Progress: \n";
    let done = "Done: \n";

    for(let key in list){
        if(list[key] === "Todo"){
            toDo += `\"${key}\" \n `;
        } else if(list[key] === "In Progress"){
            inProgress += `\"${key}\" \n `;
        } else if(list[key] === "Done") {
            done += `\"${key}\" \n `;
        }
    }

    
console.log(toDo +inProgress + done);

}


addTask("Sleep");
changeStatus("Sleep", "Done");

addTask("Read Book");
changeStatus("Read Book", "Done");

deleteTask("create a new practice task");
changeStatus("Sleep", "Done");

showList();