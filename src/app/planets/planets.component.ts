import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StartwarsApiService} from '../services/startwars-api.service';
import {MatTableDataSource} from '@angular/material/table';
import {Planet} from './Planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
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

  constructor(private router: Router, private startwarsApiService: StartwarsApiService) { }

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

}
