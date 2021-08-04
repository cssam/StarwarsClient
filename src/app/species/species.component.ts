import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StartwarsApiService} from '../services/startwars-api.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {Specie} from './Specie';
import {BottomsheetSpeciesComponent} from './bottomsheet.species.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  public appError: string | undefined;
  loading = true;
  length = 0;
  progresValue: any;
  page = 1;
  size = 10;
  species: Specie[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private startwarsApiService: StartwarsApiService, private snackBar: MatSnackBar, private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.loading = true;
    this.getSpecies(this.page);
    this.loading = false;
  }
  getSpecies(page: number): any {
    this.startwarsApiService.getSpecies(page).subscribe((res) => {
        if (res.status === 200){
          this.species = (res.body.results as [Specie]);
          this.length = res.body.count;
          this.progresValue = this.species.length;
        }
      },
      error => this.appError = error);
  }

  openBottomSheet(data: Specie): void {
    this.bottomSheet.open(BottomsheetSpeciesComponent, {data});
  }

  pageChanged(event: any): any {
    this.loading = true;
    this.getSpecies(event.pageIndex);
    this.loading = false;
  }

  openSnackBar(message: string, action: string): any {
    this.snackBar.open(message, action, {horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
  }


}
