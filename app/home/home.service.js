export default class HomeService {
 constructor() {
        this.user=null;
        console.log("home_service_user:",this.user);
  }
 
  add_user(e_mail){
      this.user = e_mail; 
      console.log("home_service_add_user:",this.user);
    }
  
  get_user(){
      console.log("home_service_get_user:",this.user);
  }
  
}