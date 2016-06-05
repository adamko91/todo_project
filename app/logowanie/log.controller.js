export default class LogController{
  constructor(LogService, $stateParams, $scope, $firebaseObject) {
    
  this.selectedUser = $scope.logged_user;
  this.taskDescription = $scope.task_description;
  this.LogService = LogService;
  }
  
  addTask(selectedUser,taskDescription){
    this.LogService.add({
        user: selectedUser,
        descriptions: taskDescription,
        state: false
    });
  }

  changeName() {
    this.name =  this.selectedUser;
    console.log("changeName", this.selectedUser);
  }

}