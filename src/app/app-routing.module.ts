import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PlanetsComponent} from './planets/planets.component';
import {PeopleComponent} from './people/people.component';
import {FilmsComponent} from './films/films.component';
import {SpeciesComponent} from './species/species.component';

const routes: Routes = [
  { path: '/', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'planets', component: PlanetsComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'films', component: FilmsComponent},
  { path: 'species', component: SpeciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
