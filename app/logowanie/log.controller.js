export default class LogController{
  constructor(LogService, $stateParams, $scope, $firebaseObject) {
    
  this.selectedUser = $scope.logged_user;
  this.taskDescription = $scope.task_description;
  this.LogService = LogService;
  this.all_task = LogService.getTasks();
  }
  
  addTask(selectedUser,taskDescription){
    this.LogService.add({
        user: selectedUser,
        descriptions: taskDescription,
        state: "active"
    });
  }
  
  list_tasks(selectedUser,type_of_state,flag){
     this.all_task =  this.LogService.getTasks();
     
      for(var i=0;i<this.all_task.length;i++){
        
            if(this.all_task[i].user == selectedUser){
              if(this.all_task[i].state == type_of_state)
               console.log (this.all_task[i]);
              else if (type_of_state == "all") 
               console.log (this.all_task[i]);
            }
            else if (flag == "all"){ 
             if(this.all_task[i].state == type_of_state)
               console.log (this.all_task[i]);
              else if (type_of_state == "all") 
               console.log (this.all_task[i]);
             }
      }
  }
  
  change_status(task){
    if(task.state == "active")
      task.state == "done";
    else if(task.state == "done")
      task.state == "active";
  }
  
}