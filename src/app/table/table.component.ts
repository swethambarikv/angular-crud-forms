import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { ListService } from '../list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  userList: User[] = [];
  editnum: number = 0;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.userList = this.listService.getUsers();
  }
  remove(id: number) {
    console.warn("remove id :" + id);
    this.listService.removeUser(id);
    this.userList = this.listService.getUsers();
  }

}