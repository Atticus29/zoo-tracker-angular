import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() editAnimalSender = new EventEmitter();



  assignMonthName(number: number){
    var monthNames: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[number];
}

editInDisplayComponent(animal: Animal){
  this.editAnimalSender.emit(animal);
}

assignSexIcon(sex: string){
  if(sex === "Male"){
    return "fa fa-male";
  } else if(sex === "Female"){
    return "fa fa-female";
  } else{
    return "fa fa-transgender";
  }
}

assignDietIcon(diet: string){
  if(diet === "Herbivore"){
    return "fa fa-leaf";
  } else if(diet === "Carnivore"){
    return "fa fa-cutlery";
  } else if(diet === "Ominvore"){
    return "fa fa-cutlery";
  } else if(diet === "Insectivore"){
    return "fa fa-bug";
  }else if(diet === "Fugivore"){
    return "fa fa-apple";
  }
  else{
    return "fa fa-cutlery";
  }
}


constructor() { }

}
