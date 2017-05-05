import { Component, Output, EventEmitter } from '@angular/core';
import {Animal} from '../animal.model'

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent{
  @Output() newAnimalSender = new EventEmitter();

  constructor() { }
  generateAnimal(species: string, common: string, nickname:string, age: number, diet: string, location:string, caretaker: number, sex: string, like: string, dislikes: string, profileURL: string){
    var newAnimal: Animal = new Animal(species, common, nickname, age, diet, location, caretaker, sex, like, dislikes, profileURL);
    this.newAnimalSender.emit(newAnimal);
  }

}
