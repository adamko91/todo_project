
export default class LogController{
  constructor(LogService, $stateParams, $scope, $firebaseObject,HomeService) {
    
  this.taskDescription = $scope.task_description;
  this.LogService = LogService;
  this.all_task = LogService.getTasks();
  this.HomeService = HomeService;
  this.selectedUser = this.HomeService.user;
   
  console.log("log_controler_construktor",this.selectedUser);
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
      console.log(this.selectedUser);
  }
  
  ChangeStateFilter(filter){
      this.stateFilter={state: filter};
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
    return this.selectedUser;
  }
  
  NotUserTask(task){
    if (task.user == this.selectedUser)
      return false;
    else  
      return true;
  }

}