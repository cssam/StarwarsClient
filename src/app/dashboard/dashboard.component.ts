import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  planets(): void {
    this.router.navigate(['/planets']);
  }

  people(): void {
    this.router.navigate(['/people']);
  }

  movies(): void {
    this.router.navigate(['/movies']);
  }
}
