export class Task {
    constructor(title, description, priority, projectId, dueDate) {
        this.id = Date.now().toString();
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.projectId = projectId;
        this.completed = false;
        this.dueDate = dueDate;
        this.createdAt = new Date();
    }
}
