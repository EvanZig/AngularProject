import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css'],
})
export class CalendarCardComponent {
  allDays: Day[] = [
    new Day('Monday (08/05)', ['Go to office', 'Gym']),
    new Day('Tuesday (09/05)', [
      'Arrange doctor appointment',
      'run 5km',
      'Champions league SemiFinals',
    ]),
    new Day('Wednesday (10/05)', ['Go shopping', 'Cinema']),
    new Day('Thursday (11/05)', ['Netflix']),
    new Day('Friday (12/05)', ['Go for a drink']),
    new Day('Saturday (13/05)', ['Watch the game']),
    new Day('Sunday (14/05)', ['F1 race']),
  ];
}

class Day {
  name: string;
  tasks: string[];

  constructor(name: string, public dailyTasks: string[]) {
    this.name = name;
    this.tasks = dailyTasks;
  }
}
