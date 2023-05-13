export class Day {
  name: string;
  tasks: Task[];

  constructor(name: string, public defaultTasks: string[], isChecked: boolean) {
    this.name = name;
    const storedTasks = localStorage.getItem(`${this.name}_tasks`);
    if (storedTasks && storedTasks!=='[]') {
      this.tasks = JSON.parse(storedTasks);
    } else {
      this.tasks = defaultTasks.map((t) => new Task(t, isChecked));
      localStorage.setItem(`${this.name}_tasks`, JSON.stringify(this.tasks));
    }
  }
  saveTasks() {
    localStorage.setItem(`${this.name}_tasks`, JSON.stringify(this.tasks));
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
