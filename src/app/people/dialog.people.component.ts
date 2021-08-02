import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Person} from './Person';

@Component({
  selector: 'app-dialog-people',
  templateUrl: './dialog.people.component.html',
  styleUrls: ['./people.component.css']
})

export class DialogPeopleComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public people: [Person]) {}
}
