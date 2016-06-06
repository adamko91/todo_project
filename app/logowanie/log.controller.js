
export default class LogController{
  constructor(LogService, $stateParams, $scope, $firebaseObject,HomeService) {
    
  this.selectedUser = HomeService.get_user();
  this.taskDescription = $scope.task_description;
  this.LogService = LogService;
  this.all_task = LogService.getTasks();
  this.HomeService_get_user = HomeService.get_user();
  }
  
  addTask(taskDescription){
    this.LogService.add({
        user: this.selectedUser,
        descriptions: taskDescription,
        state: "active"
    });
  }
  
  ChangeUserFilter(filter){
    if(filter=="all")
      this.userFilter={};
    else 
      this.userFilter={user: this.selectedUser};
  }
  
  ChangeStateFilter(filter){
      this.stateFilter={state: filter};
  }
  
  Statats(){
     this.all_task =  this.LogService.getTasks();
     this.my_done=0;
     this.my_active=0;
     this.global_done=0;
     this.global_active=0;
     
      for(var i=0;i<this.all_task.length;i++){
        
            if(this.all_task[i].user == this.selectedUser){
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
  
  GetUser(){
    return this.HomeService_get_user;
  }
  
  NotUserTask(task){
    if (task.user == this.selectedUser)
      return false;
    else  
      return true;
  }

}