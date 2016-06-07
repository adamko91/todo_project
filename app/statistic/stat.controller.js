export default class StatController{
  constructor(TodoService,HomeService) {
      this.TodoService  = TodoService;
      this.HomeService = HomeService;
  }

  Statats(){
     this.all_task =  this.TodoService.getTasks();
     this.selectedUser = this.HomeService.user;
     this.my_done=0;
     this.my_active=0;
     this.global_done=0;
     this.global_active=0;
     
     this.my_done_proc=0;
     this.my_active_proc=0;
     this.global_done_proc=0;
     this.global_active_proc=0;
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
     if (this.my_done+this.my_active > 0 ){
         this.my_done_proc= this.my_done / (this.my_done+this.my_active) ;
         this.my_active_proc= this.my_active / (this.my_done+this.my_active) ;
         }
     if(this.global_done+this.global_active){     
         this.global_done_proc= this.global_done / (this.global_done+this.global_active);
         this.global_active_proc= this.global_active / (this.global_done+this.global_active);
     }  
  }
  
  
}
  