
export default class TodoController{
  constructor(TodoService, $stateParams, $scope, $firebaseObject,HomeService) {
    
  this.taskDescription = $scope.task_description;
  this.TodoService = TodoService;
  this.all_task = TodoService.getTasks();
  this.HomeService = HomeService;
  this.selectedUser = this.HomeService.user;
   
  }
  
  addTask(taskDescription){
    this.TodoService.add({
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
  
  ChangeStatus(task){
    if(task.state == "active")
      task.state = "done";
    else if(task.state == "done")
      task.state = "active";
      this.TodoService.save(task);
  }
  
  DestroyTask(task){
    this.TodoService.destroy(task);
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