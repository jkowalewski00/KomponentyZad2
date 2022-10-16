import { Component } from '@angular/core';

class StudentClass {
  private name: string;
  private surname: string;
  private index: number;

  constructor(name: string, surname: string, index: number) {
    this.name = name;
    this.surname = surname;
    this.index = index;
  }

  public get Name(): string {
    return this.name;
  }

  public get Surname(): string {
    return this.surname;
  }

  public get Index(): number {
    return this.index;
  }

  public get Info(): string {
    return `${this.name} ${this.surname} ${this.index}`;
  }

  public set addName(name: string) {
    this.name = name;
  }

  public set addSurname(surname: string) {
    this.surname = surname;
  }

  public set addIndex(index: number) {
    this.index = index;
  }
}

let student = new StudentClass('Jakub', 'Kowalewski', 107791);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  public student: StudentClass;

  constructor() {
    this.student = new StudentClass('Jakub', 'Kowalewski', 107791);
  }
}
