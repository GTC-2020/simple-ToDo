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
    function sortTask(progres){
        let outputString = ""
        for(key in list){
            if(list[key] === progres){
                outputString  +=  `\n\"${key}\"`;
            } 
        }
        if(outputString == "") {
        outputString = "\n-";
        }
        return outputString;
    }
    console.log("\nToDo:" +sortTask("Todo")  + "\nIn Progress:" + sortTask("In Progress") + "\nDone:"  + sortTask("Done"));

}


addTask("Sleep");
changeStatus("Sleep", "Done");

addTask("Read Book");
changeStatus("Read Book", "Done");

deleteTask("create a new practice task");
changeStatus("Sleep", "Done");
showList();