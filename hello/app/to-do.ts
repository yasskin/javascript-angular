interface IPerson {
  name: string; // required property
  email: string; // another required property
}

interface ITask {
  done: boolean;
  description: string;
  priority: string;
  markDone(): void; // void means that the method takes no arguments and returns no values
  assignedTo?: IPerson; // the ? means the property will be optional
}

class Task implements ITask { // the base class or parent class or superclass
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson) {}
  markDone(){
    this.done = true;
  }
}

// extends keyword says that the class HomeTask is inheriting from the base class Task
class HomeTask extends Task {
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){
    super(description, priority);
  }ription: string;


} //child class or subclass

class HobbyTask extends Task {
  constructor(public description: string) {
    super(description, "low"); // Calling super() in a constructor is essentially just calling the parent's version of constructor() and telling it to finish its job.
  }
}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo?: IPerson) {
    super(description, priority, assignedTo);
  }
}

var diane: IPerson = {
  name: "Diane D",
  email: "diane@epicodus.com"
}

var thor: IPerson = {
  name: "Thor Son of Odin",
  email: "thor@asgard.com"
}

var loki: IPerson = {
  name: "God of mischief",
  email: "loki@geocities.com"
}

var tasks: Task[] = [];

tasks.push(new Task("Do the dishes.", "High"));
tasks.push(new Task("Buy chocolate.", "Low", diane));
tasks.push(new Task("Wash the Laundry.", "High"));
tasks[0].markDone(); // mark the first task as done.

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date(); // get the current date and store it in the variable called 'today'
var tomorrow = new Date(); // set the variable tomorrow equal to the current date, but then reset it to today's date plus 1
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date(); // create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High", diane));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium", thor));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low", loki));

console.log(tasks);
