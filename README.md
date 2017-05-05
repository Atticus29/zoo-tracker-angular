# DigitalJungle

## Created: 5 May, 2017

## By: Mark Fisher

## Description
DigitalJungle is an open source alternative for tracking animals in your wildlife sanctuary....TODO

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular](TODO)

## Dependencies

* Bootstrap (should be set up automatically upon build of this webapp, but if not, simply navigate to the project directory in terminal and type, `ember install ember-bootstrap`)
* Firebase (should be set up automatically upon build of this webapp, but if not, simply navigate to the project directory in terminal and type, `ember install emberfir`)

## Setup

### Installation

### Running

## Specs/User stories
| Behavior                   | Input Example     | Output Example    |
| -------------------------- | -----------------:| -----------------:|
|User should be able to ask a new question|User adds a question and fills out details about the question|Question is recorded by the app|

## Known Bugs/Future Directions

* Currently, the key to firebase is on display for the world to see. Eventually, this should be migrated to a .env file.

# License

The MIT License (MIT)

Copyright (c) 2017 Mark Fisher

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


---

## Planning

- [ ] Before you begin, take some time to map out a plan - what features do you definitely want to implement
- [ ] Which can wait until you're approved for a larger project?
- [ ] Make sure to record your ambitions in your README.
- [ ] Users (zoo staff), should be able to add newly-admitted animals to the app.

### Model(s)
  - [x] Model: animal
      - [x] Time signature added to the system
      - [x] Species (binomial nomenclature)
      - [x] Name (string)
      - [x] Age (number)
      - [x] Diet (limit to herbivore, carnivore, omnivore) -radio button (string)
      - [x] Location (string)
      - [x] Caretakers (number)
      - [x] Sex -radio button (string)
      - [x] Likes (string)
      - [x] Dislikes (string)

### Components

- [ ] **add-animal**: I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
- [ ] **animals-display**:I want to view a list of animals I have logged.
- [ ] **edit-animal**:I want to click an animal to edit its name, age or caretakers.


### Pipes

- [ ] I want options to view all animals
- [ ] only young animals (less than 2 years of age)
- [ ] only mature animals (more than 2 years of age).
- [ ] *filter by species*
- [ ] *filter by diet*

### General Checklist
- [ ] Application uses a model to organize data.
- [ ] Components create display and behavior for your templates.
- [ ] TypeScript is used throughout application; including variable data types.
- [ ] Users can successfully create and edit instances of a model.
- [ ] Models can be filtered using a pipe.
- [ ] Project is in a polished, portfolio-quality state. (Clear code presentation, error free, basic styling, complete README, thoughtful UI, etc.)
- [ ] README contains details on functionality you'd include in the future, given the opportunity.
- [ ] Required functionality was in place by the Friday deadline.
- [ ] Project demonstrates understanding of week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

### Bonus
- [ ] Extend the functionality of the app by building out the animal model to further enhance the app.
- [ ] Add custom SASS styling with corresponding Gulp tasks to compile.
- [ ] Display of the total number of caretakers needed in a day.
- [ ] Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.
- [ ] Expand the application to differentiate between animals' species. Group the animals into those categories. Then include a component to display the total needed caretakers for whichever species the user selects.
- [ ] Add a new master component to average the total age for each species.
- [ ] Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores)
- [ ] *deploy on firebase*
- [ ] *set up database in firebase*
- [ ] *optimize accessibility*
- [ ] *DRY up*

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
