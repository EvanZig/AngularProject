export class Day {
  name: string;
  tasks: Task[];

  constructor(name: string, public defaultTasks: string[], isChecked: boolean) {
    this.name = name;
    this.tasks = defaultTasks.map((taskName) => new Task(taskName, isChecked));
  }

  saveTasks() {
    const storedTasks = localStorage.getItem('calendar_tasks');
    if (storedTasks) {
      const days = JSON.parse(storedTasks) as Day[];
      const dayIndex = days.findIndex((day) => day.name === this.name);
      if (dayIndex !== -1) {
        days[dayIndex].tasks = this.tasks;
        localStorage.setItem('calendar_tasks', JSON.stringify(days));
      }
    }
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