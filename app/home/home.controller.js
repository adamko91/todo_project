export default class HomeController{
  constructor(HomeService) {
    this.HomeService = HomeService;
    this.if_logged = "undefined"; 
  }
  
  add_user(user){
    console.log(user);
    this.HomeService.user = user;
    this.if_logged = "defined";
  }
  
  
}
  
