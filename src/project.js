import { Task } from './task.js';

export class Project {
    constructor(title) {
        this.id = Date.now().toString();
        this.title = title;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
    }
}


    