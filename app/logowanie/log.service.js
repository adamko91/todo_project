/*global Firebase */

export default class LogService {
  constructor($firebaseArray) {
        this.firebaseArray = $firebaseArray;
        this.ref = new Firebase("https://adamkotododb.firebaseio.com/");
        this.item = $firebaseArray(this.ref);
  }

 add(task)
    {
         console.log(task);
        this.item.$add({
           'user': task.user,
           'description': task.descriptions,
           'state': task.state
        }); 
    }
  
  getTasks() {
    return this.item;
  }
  
}