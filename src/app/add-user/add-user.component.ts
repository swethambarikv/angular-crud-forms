import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { ListService } from '../list.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private service:ListService,private router:Router,private route: ActivatedRoute,) { 
  }
  id: number = 0;
  userList = new User();
  topics=['Angular','PHP','React']
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.userList.id=(params['id']);
        const data = this.service.getUsersByID(this.id);
        if (data) {
          this.userList=(data);
        }
      }
    });
  }
  tableDisplay(){
      if (this.userList.id === 0) {
      //Create New User
      console.log("id : "+this.userList.id)
      this.service.setUser(this.userList);
    } else {
      //Update User info
      this.service.updateUser(this.userList);
    } 
    this.router.navigate(['/table']);
  }
  backButton(){
    this.router.navigate(['/table']);
  }

 
}