export default class HomeController{
  constructor(HomeService) {
    this.HomeService = HomeService;
    this.if_logged = "undefined"; 
    this.user = null;
  }
  
  add_user(user){
    console.log(user);
    this.HomeService.user = user;
    this.user = user;
    this.if_logged = "defined";
  }
  
  change_if_logged(){
   this.if_logged = "undefined";
  } 
  
  
  
}
  
