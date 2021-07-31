import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {StartwarsApiService} from '../services/startwars-api.service';
import {Person} from './Person';
import {MatAccordion} from '@angular/material/expansion';
import {Film} from '../films/Film';
import {Specie} from '../species/Specie';
import {Starship} from '../starships/Starship';
import {Vehicle} from "../vehicles/Vehicle";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion | any;

  public appError: string | undefined;
  people: Person[] = [];
  loading = true;
  page = 1;
  size = 10;
  length = 0;
  films: Film[] = [];
  species: Specie[] = [];
  starships: Starship[] = [];
  vehicles: Vehicle[] = [];

  constructor(private router: Router, private startwarsApiService: StartwarsApiService) {
  }

  ngOnInit(): void {
    this.getPeopleList(this.page);
    this.loading = false;
  }

  getPeopleList(page: number): any {
    this.startwarsApiService.getPeople(page).subscribe((res) => {
      if (res.status === 200){
          this.people = (res.body.results as [Person]);
          this.length = res.body.count;
      }
    },
      error => this.appError = error);
  }

  getPerson(url: string): any {
    this.startwarsApiService.getFromDirectEndpoint(url).subscribe((res) => {
      if (res.status === 200){
        this.people = (res.body as [Person]);
      }
    });
  }

  pageChanged(event: any): any {
    this.loading = true;
    this.getPeopleList(event.pageIndex);
    this.loading = false;
  }

  getFilms(urls: [string]): any {
    const films: Film[] = [];
    for (const url of urls) {
      this.startwarsApiService.getFromDirectEndpoint(url).subscribe((res) => {
        if (res.status === 200){
          films.push(res.body as Film);
        }
      });
    }
    this.films = films;
  }

  getSpecies(urls: [string]): any {
    const species: Specie[] = [];
    for (const url of urls) {
      this.startwarsApiService.getFromDirectEndpoint(url).subscribe((res) => {
        if (res.status === 200){
          species.push(res.body as Specie);
        }
      });
    }
    this.species = species;
  }

  getStarships(urls: [string]): any {
    const starships: Starship[] = [];
    for (const url of urls) {
      this.startwarsApiService.getFromDirectEndpoint(url).subscribe((res) => {
        if (res.status === 200){
          starships.push(res.body as Starship);
        }
      });
    }
    this.starships = starships;
  }

  getVehicles(urls: [string]): any {
    const vehicles: Vehicle[] = [];
    for (const url of urls) {
      this.startwarsApiService.getFromDirectEndpoint(url).subscribe((res) => {
        if (res.status === 200){
          vehicles.push(res.body as Vehicle);
        }
      });
    }
    this.vehicles = vehicles;
  }
}
