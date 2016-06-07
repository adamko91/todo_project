export default class HomeService {
 constructor() {
        this.user=null;
  }
 
  add_user(e_mail){
      this.user = e_mail; 
    }
  
  get_user(){
   return this.user ;
  }
  
}