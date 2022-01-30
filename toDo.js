const STATUS ={
    IN_PROGRESS: "In Progress",
    DONE: "Doone",
    TO_DO:"To Do"
}
DEFAULT_STATUS = STATUS.TO_DO;

const list = {
    "create a new practice task": STATUS.IN_PROGRESS,
    "make a bed": STATUS.DONE,
    "write a post": STATUS.TO_DO,
}

    function changeStatus(task, progress){
        if(task in list)
         list[task] = progress;
    }

  function  addTask(task){
        list[task] = DEFAULT_STATUS;
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
    console.log("\nTo Do:" +sortTask("Todo")  + "\nIn Progress:" + sortTask("In Progress") + "\nDone:"  + sortTask("Done"));

}


addTask("Sleep");
changeStatus("Sleep", "Done");

addTask("Read Book");
changeStatus("Read Book", "Done");

deleteTask("create a new practice task");
changeStatus("Sleep", "Done");
showList();