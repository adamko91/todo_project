
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
  
  ChangeUserFilter(filter){
    if(filter=="all")
      this.userFilter={};
    else 
      this.userFilter={user: filter};
      console.log(filter);
  }
  
  ChangeStateFilter(filter){
      this.stateFilter={state: filter};
  }
  
  Statats(selectedUser){
     this.all_task =  this.LogService.getTasks();
     this.my_done=0;
     this.my_active=0;
     this.global_done=0;
     this.global_active=0;
     
      for(var i=0;i<this.all_task.length;i++){
        
            if(this.all_task[i].user == selectedUser){
              if(this.all_task[i].state == "done")
                this.my_done = this.my_done + 1;
              else  
                this.my_active = this.my_active + 1;
            }
             if(this.all_task[i].state == "done")
               this.global_done = this.global_done + 1;
              else 
                this.global_active = this.global_active + 1;
      }
  }
  
  ChangeStatus(task){
    if(task.state == "active")
      task.state = "done";
    else if(task.state == "done")
      task.state = "active";
      this.LogService.save(task);
  }
  
  DestroyTask(task){
    this.LogService.destroy(task);
  }
  
  NotUserTask(task,logged_user){
    if (task.user == logged_user)
      return false;
    else  
      return true;
  }

}