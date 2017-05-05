import { Component, Input, Output } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animals-display',
  templateUrl: './animals-display.component.html',
  styleUrls: ['./animals-display.component.css']
})
export class AnimalsDisplayComponent {
  @Input() childAnimalList: Animal[];
  @Input() childFilterString: string;
  @Input() childIdentityString: string;



assignMonthName(number: number){
  var monthNames: string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[number];
}

constructor() { }

}
