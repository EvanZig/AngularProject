import { Component } from '@angular/core';
import { calendarTasks } from './models/card-item-mock';
import { Day } from './models/card-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  start: number = 0;
  end: number = 7;
  allDays: Day[] = [];

  ngOnInit() {
    const storedTasks = localStorage.getItem('calendar_tasks');
    if (storedTasks) {
      this.allDays = JSON.parse(storedTasks);
    } else {
      this.allDays = calendarTasks;
    }
  }

  next7() {
    this.start += 7;
    this.end += 7;
  }

  prev7() {
    this.start -= 7;
    this.end -= 7;
  }

  saveAllTasks() {
    localStorage.setItem('calendar_tasks', JSON.stringify(this.allDays));
  }

  title = 'AngularProject';
}