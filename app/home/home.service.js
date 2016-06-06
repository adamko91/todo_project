export default class HomeService {
 constructor() {
        this.user=null;
  }
 
  add_user(e_mail){
      this.user = e_mail; 
      console.log(this.user);
    }
  
  get_user(){
      console.log(this.user);
     return this.user;
  }
  
}