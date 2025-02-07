import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/api/user.service";
import {UserStateService} from "../../services/user-state.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private userService: UserService,
              private userStateService: UserStateService) {
  }

  ngOnInit(): void {
    this.userService.fetchUser()
      .pipe(
        tap((response) => this.userStateService.user = response.data)
      ).subscribe();
  }

}
