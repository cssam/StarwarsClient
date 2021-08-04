import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StartwarsApiService} from '../services/startwars-api.service';
import {Film} from './Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public appError: string | undefined;
  films: Film[] = [];
  loading = true;
  constructor(private router: Router, private startwarsApiService: StartwarsApiService) { }

  ngOnInit(): void {
    this.getFilmList();
    this.loading = false;
  }

  getFilmList(): any {
    this.startwarsApiService.getFilms().subscribe((res) => {
        if (res.status === 200){
          this.films = (res.body.results as [Film]);
        }
      },
      error => this.appError = error);

  }

}
