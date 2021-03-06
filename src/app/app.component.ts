import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterAnimalArray: Animal[] = [
    new Animal("Homo sapiens", "Human", "Rick", 37, "Omnivore", "Zoo shop", 3, "Male", "Massages", "Rude customers", "https://image1.masterfile.com/getImage/600-03069409em-portrait-of-store-clerk-in-gourmet-food-shop-stock-photo.jpg"),
    new Animal("Solenopsis invicta","Red Imported Fire ant", "Brenda", 3, "Omnivore", "Your leg", 1, "Female", "Being ornery", "Fire", "https://photos.smugmug.com/Ants/Taxonomic-List-of-Ant-Genera/Solenopsis/i-6sJV2gR/1/85e12993/S/invicta13-S.jpg"),
    new Animal("Xenopus laevis","African Clawed Frog", "Bouffant", 2, "Insectivore", "Reptile House", 1, "Female", "Extra flies", "Fungus", "http://www.ecohealthypets.com/writable/pet_report_photos/photo/480x/xenopus_laevis_02.jpeg"),
    new Animal("Aptenodytes forsteri","Emperor Penguin", "Pinguina", 10, "Carnivore", "Artic Zone", 2, "Female", "Huddling with other penguins", "Fungus", "https://s-media-cache-ak0.pinimg.com/736x/a6/d9/11/a6d91157d54769bdbd140b24da5ab739.jpg"),
    new Animal("Ara macao","Scarlet Macaw", "Sally", 27, "Herbivore", "Tropical Aviary", 1, "Female", "Tickles", "Fingers", "http://www.lecornelle.it/wp-content/uploads/2015/02/zoom56.jpg"),
    new Animal("Ara macao","Scarlet Macaw", "Harry", 23, "Herbivore", "Tropical Aviary", 1, "Male", "Fingers", "Tickles", "https://cdn.shutterstock.com/shutterstock/videos/14441545/thumb/1.jpg"),
    new Animal("Bubo scandiacus", "Snowy Owl","Screech", 4, "Carnivore", "Artic Zone", 2, "Male", "Moths", "Traffic noises","https://files.allaboutbirds.net/wp-content/uploads/2015/04/SnowyOwl-Kube-FI.jpg"),
    new Animal("Hyaena hyaena","Striped Hyena", "Heckle", 6, "Carnivore", "Savanna", 3, "Female", "Bones", "Jessica", "https://s-media-cache-ak0.pinimg.com/originals/df/3e/99/df3e9958df149a135ec1c94496f395f2.jpg"),
    new Animal("Panthera leo", "Lion","Sage", 9, "Carnivore", "Savanna", 2, "Male", "A wide selection of toys", "Too much sunlight", "http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/photoark-lion.png.adapt.945.1.jpg"),
    new Animal("Pteropus vampyrus", "Flying Fox","Geoffrey", 1, "Frugivore", "Artic Zone", 2, "Male", "Long naps", "Overripe fruit", "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pteropus_vampyrus_headshot.jpeg"),
  ];

  public displayNew: boolean = false;
  public displayAniamls: boolean = true;
  public displayEdit: boolean = false;
  public filterString: string = null;
  public identityString: string = null;
  public animalToBeEdited = null;

  displayNewForm(){
    this.displayEdit = false;
    this.displayAniamls = false;
    this.displayNew = true;
  }
  endDisplayNewForm(){
    this.displayNew = false;
    this.displayAniamls = true;
  }
  addAnimal(animal: Animal){
    this.masterAnimalArray.push(animal);
    this.endDisplayNewForm();
  }

  applyFilter(filterStringInput: string, indentityStringInput: string){
    this.displayAniamls = true;
    this.displayEdit = false;
    this.displayNew = false;
    this.filterString = filterStringInput;
    this.identityString = indentityStringInput;
  }

  getUniqueSpecies(animals: Animal[]){
    var flags = [], output = [], l = animals.length, i;
    for( i=0; i<l; i++) {
      if( flags[animals[i].species]) continue;
      flags[animals[i].species] = true;
      output.push(animals[i].species);
    }
    return output;
  }

  getUniqueDiets(animals: Animal[]){
    var flags = [], output = [], l = animals.length, i;
    for( i=0; i<l; i++) {
      if( flags[animals[i].diet]) continue;
      flags[animals[i].diet] = true;
      output.push(animals[i].diet);
    }
    return output;
  }

  editAnimal(animal: Animal){
    this.displayAniamls = false;
    this.displayEdit = true;
    this.animalToBeEdited = animal;
  }

  endEdit(){
    this.displayAniamls = true;
    this.displayEdit = false;
    this.displayNew = false;
  }

}
