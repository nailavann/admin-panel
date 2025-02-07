import {Component, OnInit} from '@angular/core';
import {filter, map, Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/api/user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user$!: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.activatedRoute.paramMap.pipe(
      filter(params => params.has('id')),
      switchMap(params => this.userService.getUserById(params.get('id')!)),
      map((response) => response.data)
    );

  }
}
