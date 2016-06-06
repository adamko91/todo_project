export default class HomeService {
 constructor() {
        this.user=null;
  }
 
  add_user(e_mail){
      this.user = e_mail; 
    }
  
  get_user(){
      console.log(this.user);
  }
  
}