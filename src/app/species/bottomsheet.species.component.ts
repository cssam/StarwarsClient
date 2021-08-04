import {Component, Inject} from '@angular/core';

import {Specie} from './Specie';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottomsheet-species',
  templateUrl: './bottomsheet.species.component.html',
  styleUrls: ['./species.component.css']
})

export class BottomsheetSpeciesComponent {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public specie: Specie) {}
}
