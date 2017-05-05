import { Pipe, PipeTransform } from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(input: Animal[], by: string, identity: string) {
    var output: Animal[];
    if(by === "young"){
      output = input.filter(animal=>{
        return animal.age<2;
      });
      return output;
    } else if(by === 'mature'){
      output = input.filter(animal=>{
        return animal.age>2;
      });
      return output;
    } else if(by === 'species'){
      output = input.filter(animal=>{
        return animal.species===identity;
      });
      return output;
    } else{
      return input;
    }
  }

}
