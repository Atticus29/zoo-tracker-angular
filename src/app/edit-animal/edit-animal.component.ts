import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from '../animal.model';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent {
  @Input() editAnimal: Animal;
  @Output() editAnimalSender = new EventEmitter();
  constructor() { }

  finishUpdate(){
    console.log("got here");
    this.editAnimalSender.emit();
  }

}
