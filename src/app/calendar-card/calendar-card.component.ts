import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css'],
})
export class CalendarCardComponent {
  @Input() start:number = 0;
  @Input() end:number = 7;
  allDays: Day[] = [
    new Day('Monday (01/05)', ['Go to office', 'Gym'], false),
    new Day('Tuesday (02/05)', [
      'Arrange doctor appointment',
      'run 5km',
      'Champions league SemiFinals',
    ],false),
    new Day('Wednesday (03/05)', ['Go shopping', 'Cinema'],false),
    new Day('Thursday (04/05)', ['Netflix'],false),
    new Day('Friday (05/05)', ['Go for a drink'],false),
    new Day('Saturday (06/05)', ['Watch the game'],false),
    new Day('Sunday (07/05)', ['F1 race'],false),
    new Day('Monday (08/05)', ['Go to office', 'Gym'],false),
    new Day('Tuesday (09/05)', [
      'Arrange doctor appointment',
      'run 5km',
      'Champions league SemiFinals',
    ],false),
    new Day('Wednesday (10/05)', ['Go shopping', 'Cinema'],false),
    new Day('Thursday (11/05)', ['Netflix'],false),
    new Day('Friday (12/05)', ['Go for a drink'],false),
    new Day('Saturday (13/05)', ['Watch the game'],false),
    new Day('Sunday (14/05)', ['F1 race'],false),
    new Day('Monday (15/05)', ['Go to office', 'Gym'],false),
    new Day('Tuesday (16/05)', [
      'Arrange doctor appointment',
      'run 5km',
      'Champions league SemiFinals',
    ],false),
    new Day('Wednesday (17/05)', ['Go shopping', 'Cinema'],false),
    new Day('Thursday (18/05)', ['Netflix'],false),
    new Day('Friday (19/05)', ['Go for a drink'],false),
    new Day('Saturday (20/05)', ['Watch the game'],false),
    new Day('Sunday (21/05)', ['F1 race'],false),
    new Day('Monday (22/05)', ['Go to office', 'Gym'],false),
    new Day('Tuesday (23/05)', [
      'Arrange doctor appointment',
      'run 5km',
      'Champions league SemiFinals',
    ],false),
    new Day('Wednesday (24/05)', ['Go shopping', 'Cinema'],false),
    new Day('Thursday (25/05)', ['Netflix'],false),
    new Day('Friday (26/05)', ['Go for a drink'],false),
    new Day('Saturday (27/05)', ['Watch the game'],false),
    new Day('Sunday (28/05)', ['F1 race'],false),
  ];

  toggleTaskDone(task: any) {
    task.isChecked = !task.isChecked;
  }
  
}

class Day {
  name: string;
  tasks: Task[];

  constructor(name: string, public dailyTasks: string[], isChecked:boolean) {
    this.name = name;
    this.tasks = dailyTasks.map((t) => new Task(t, isChecked));
  }
}

class Task {
  name: string;
  isChecked: boolean;

  constructor(name: string, isChecked: boolean) {
    this.name = name;
    this.isChecked = isChecked;
  }
}
