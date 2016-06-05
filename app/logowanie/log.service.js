/*global Firebase */

export default class LogService {
  constructor($firebaseArray) {
        this.firebaseArray = $firebaseArray;
        this.ref = new Firebase("https://adamkotododb.firebaseio.com/");
        this.items = $firebaseArray(this.ref);
  }

 add(task)
    {
         console.log(task);
        this.items.$add({
           'user': task.user,
           'description': task.descriptions,
           'state': task.state
        }); 
    }
  
  addUser(user) {
  }
  
}