export class Animal {
  public dateAdded: Date = new Date();
  constructor(public species: string, public commonName: string, public name: string, public age: number, public diet: string, public location: string, public caretakerCount: number, public sex: string, public likes: string, public dislikes: string, public profilePicURL: string) {}
  // TODO add profile caption
}
