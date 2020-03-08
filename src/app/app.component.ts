import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDoList';
  age = 40;

  constructor() {
    this.changeTitle('Panco');
    console.log('This is constructor, ' + this.title);
  }

  ngOnInit() {
    this.changeTitle('Cheong');
    console.log('This is On Init, ' + this.title);
  }

  changeTitle(name: string): void {
    this.title = name;
  }
}
