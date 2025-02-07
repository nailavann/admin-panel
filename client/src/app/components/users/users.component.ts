import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/api/user.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  length = 0;
  pageSize = 20;
  pageIndex = 0;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.fetchAllUsers(1);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.fetchAllUsers(this.pageIndex + 1);
  }

  fetchAllUsers(page: number) {
    console.log('istek baslıyor.');
    this.userService.getAllUsers(page).subscribe((response) => {
      console.log(response);
      this.users = response.data;
      this.length = response.meta.total;
      this.pageSize = response.meta.per_page;
      this.pageIndex = response.meta.current_page - 1;
    });
  }

}
