import { Component, Input, Output } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animals-display',
  templateUrl: './animals-display.component.html',
  styleUrls: ['./animals-display.component.css']
})
export class AnimalsDisplayComponent {
  @Input() childAnimalList: Animal[];

  constructor() { }

}
