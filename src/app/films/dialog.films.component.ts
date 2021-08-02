import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Film} from './Film';

@Component({
  selector: 'app-dialog-films',
  templateUrl: './dialog.films.component.html',
  styleUrls: ['./films.component.css']
})

export class DialogFilmsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public films: [Film]) {}
}
