import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ripple_color = '#498cff';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  planets(): void {
    this.router.navigate(['/planets']);
  }

  people(): void {
    this.router.navigate(['/people']);
  }

  films(): void {
    this.router.navigate(['/films']);
  }

  species(): void {
    this.router.navigate(['/species']);
  }
}
