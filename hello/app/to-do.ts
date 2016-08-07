class Task {
  done: boolean;
  constructor(public description: string, public priority: string) {}
  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task("Do the dishes.", "High"));
tasks.push(new Task("Buy chocolate.", "Low"));
tasks.push(new Task("Wash the Laundry.", "High"));
tasks[0].markDone();
console.log(tasks);


class Thing {
  propertyName: type = initialValue;
}
