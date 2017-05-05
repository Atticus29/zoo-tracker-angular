import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalsDisplayComponent } from './animals-display/animals-display.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsDisplayComponent,
    EditAnimalComponent,
    AddAnimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
