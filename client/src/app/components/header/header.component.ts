import {Component} from '@angular/core';
import {UserStateService} from "../../services/user-state.service";
import {UserService} from "../../services/api/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/api/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public userStateService: UserStateService,
              private authService: AuthService,
              private router: Router) {

  }

  logout() {
    this.authService.logout().subscribe();
    localStorage.clear();
    this.userStateService.reset();
    this.router.navigate(['login']);
  }

}
