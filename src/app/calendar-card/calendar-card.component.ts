import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css'],
})
export class CalendarCardComponent {
  allDays: Day[] = [
    new Day('Monday (01/05)', ['Go to office', 'Gym']),
    new Day('Tuesday (02/05)', [
      'Arrange doctor appointment',
      'run 5km',
      'Champions league SemiFinals',
    ]),
    new Day('Wednesday (03/05)', ['Go shopping', 'Cinema']),
    new Day('Thursday (04/05)', ['Netflix']),
    new Day('Friday (05/05)', ['Go for a drink']),
    new Day('Saturday (06/05)', ['Watch the game']),
    new Day('Sunday (07/05)', ['F1 race']),
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
    new Day('Monday (15/05)', ['Go to office', 'Gym']),
    new Day('Tuesday (16/05)', [
      'Arrange doctor appointment',
      'run 5km',
      'Champions league SemiFinals',
    ]),
    new Day('Wednesday (17/05)', ['Go shopping', 'Cinema']),
    new Day('Thursday (18/05)', ['Netflix']),
    new Day('Friday (19/05)', ['Go for a drink']),
    new Day('Saturday (20/05)', ['Watch the game']),
    new Day('Sunday (21/05)', ['F1 race']),
    new Day('Monday (22/05)', ['Go to office', 'Gym']),
    new Day('Tuesday (23/05)', [
      'Arrange doctor appointment',
      'run 5km',
      'Champions league SemiFinals',
    ]),
    new Day('Wednesday (24/05)', ['Go shopping', 'Cinema']),
    new Day('Thursday (25/05)', ['Netflix']),
    new Day('Friday (26/05)', ['Go for a drink']),
    new Day('Saturday (27/05)', ['Watch the game']),
    new Day('Sunday (28/05)', ['F1 race']),
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
