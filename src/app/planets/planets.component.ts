import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StartwarsApiService} from '../services/startwars-api.service';
import {MatTableDataSource} from '@angular/material/table';
import {Planet} from './Planet';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {Film} from '../films/Film';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogFilmsComponent} from '../films/dialog.films.component';
import {Person} from '../people/Person';
import {DialogPeopleComponent} from '../people/dialog.people.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PlanetsComponent implements OnInit {

  public appError: string | undefined;
  loading = true;
  dataSource: any;
  columnsToDisplay =  ['name', 'climate', 'diameter', 'gravity', 'orbital_period', 'rotation_period', 'population', 'surface_water', 'terrain' ];
  expandedElement: Planet | null | undefined;
  page = 1;
  size = 10;
  length = 0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private startwarsApiService: StartwarsApiService, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPlanets(this.page);
    this.loading = false;
  }

  getPlanets(page: number): any {
    this.startwarsApiService.getPlanets(page).subscribe((res) => {
        if (res.status === 200){
          this.dataSource = (res.body.results as MatTableDataSource<Planet>);
          this.length = res.body.count;
        }
      },
      error => this.appError = error);
  }

  pageChanged(event: any): any {
    this.loading = true;
    this.getPlanets(event.pageIndex);
    this.loading = false;
  }

  openSnackBar(message: string, action: string): any {
    this.snackBar.open(message, action, {horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
  }

  getFilms(urls: [string]): any {
    if ( urls.length < 1){
      this.snackBar.open('No Films: ', 'Close',
        {horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition}
      );
      return;
    } else {
      const films: Film[] = [];
      for (const url of urls) {
        this.startwarsApiService.getFromDirectEndpoint(url).subscribe((res) => {
          if (res.status === 200){
            films.push(res.body as Film);
            // filmTitles = films.map((element) => element.title).join('<br/>');
          }
        });
      }
      this.openFilmDialog(films);
      return;
    }
  }
  openFilmDialog(data: any): any {
    this.dialog.open(DialogFilmsComponent, {data});
  }

  getPeople(residents: [string]): any {
    if ( residents.length < 1){
      this.snackBar.open('No Residents: ', 'Close',
        {horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition}
      );
      return;
    } else {
      const people: Person[] = [];
      for (const resident of residents) {
        this.startwarsApiService.getFromDirectEndpoint(resident).subscribe((res) => {
          if (res.status === 200){
            people.push(res.body as Person);
          }
        });
      }
      this.openPeopleDialog(people);
      return;
    }
  }

  openPeopleDialog(data: any): any {
    this.dialog.open(DialogPeopleComponent, {data});
  }
}
