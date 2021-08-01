import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Star Wars Explorer';
  isAuthenticated = false;

  constructor(private router: Router) {
    this.router.navigate(['/dashboard']);
  }


  async logout(): Promise<void> {

  }

  dashboard(): any {
    this.router.navigate(['/dashboard']);
  }
}

