var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority, assignedTo) {
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
// extends keyword says that the class HomeTask is inheriting from the base class Task
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask(description, priority, assignedTo) {
        _super.call(this, description, priority);
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return HomeTask;
}(Task)); //child class or subclass
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low"); // Calling super() in a constructor is essentially just calling the parent's version of constructor() and telling it to finish its job.
        this.description = description;
    }
    return HobbyTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority, assignedTo) {
        _super.call(this, description, priority, assignedTo);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return WorkTask;
}(Task));
var diane = {
    name: "Diane D",
    email: "diane@epicodus.com"
};
var thor = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
};
var loki = {
    name: "God of mischief",
    email: "loki@geocities.com"
};
var tasks = [];
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
