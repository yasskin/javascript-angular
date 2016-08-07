module ToDoList {
  export interface ITask {
    description: string;
    done: boolean;
    priority: string;
    markDone(): void;
    assignedTo?: IPerson;
  }

// Here, we are merely adding the keyword export to any declarations that we will need outside of this file.

  export interface IPerson {
    name: string;
    email: string;
    phone?: string; // optional phone number.
  }

  export class Task implements ITask {
    done: boolean = false;
    constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
    markDone(){
      this.done = true;
    }
  }

  export class HomeTask extends Task {
    constructor(public description: string, public priority: string, public assignedTo?: IPerson){
      super(description, priority);
    }
  }

  export class WorkTask extends Task {
    constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
      super(description, priority, assignedTo);
    }
  }

  export class HobbyTask extends Task {
    constructor(public description: string){
      super(description, "low");
    }
  }
}
