import {Component, OnInit} from '@angular/core';
import {LoadingService} from "./services/loading.service";
import {UserStateService} from "./services/user-state.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public loadingService: LoadingService) {
  }

  ngOnInit(): void {
  }

}
