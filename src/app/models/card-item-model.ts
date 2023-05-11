export class Day {
    name: string;
    tasks: Task[];
  
    constructor(name: string, public dailyTasks: string[], isChecked:boolean) {
      this.name = name;
      this.tasks = dailyTasks.map((t) => new Task(t, isChecked));
    }
  }
  
export class Task {
    name: string;
    isChecked: boolean;
  
    constructor(name: string, isChecked: boolean) {
      this.name = name;
      this.isChecked = isChecked;
    }
  }
  