import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private userList: User[] = [{
    id: 1,
    name: 'Mahalakshmi Pandiyan',
    email: 'maha@gmail.com',
    phone: '6383638047',
    topic:'angular'
}];
id1:number=1;

  constructor() { }
  getUsers(){
    return this.userList
  }
  setUser(user :User){
    user.id = this.id1+1;
    this.userList.push(user);
  }
  updateUser(user:User){
    const userIndex = this.userList.findIndex(x => x.id == user.id);
    this.userList[userIndex] = user;
  }
  removeUser(id: number) {
    this.userList = this.userList.filter(x => x.id != id);
}
getUsersByID(id: number) {
  return this.userList.find(x => x.id == id)
}
}