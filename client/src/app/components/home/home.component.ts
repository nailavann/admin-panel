import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/api/stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any = {};

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getStats().subscribe((response) => {
      this.data = response.data;
    });
  }
}
