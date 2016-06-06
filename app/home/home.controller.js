export default class HomeController{
  constructor(HomeService) {
    this.HomeService = HomeService;
  }
  
  add_user(user){
    console.log(user);
    this.HomeService.user = user;
  }
  
  
}
  
