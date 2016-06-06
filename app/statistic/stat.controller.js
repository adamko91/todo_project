export default class StatController{
  constructor(LogService,HomeService) {
      this.LogService  = LogService;
      this.HomeService = HomeService;
  }

  Statats(){
     this.all_task =  this.LogService.getTasks();
     this.selectedUser = this.HomeService.user;
     this.my_done=0;
     this.my_active=0;
     this.global_done=0;
     this.global_active=0;
     console.log("jestem");
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
  
  
}
  