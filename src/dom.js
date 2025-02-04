export class DOM {
    static createProjectElement(project) {
        const li = document.createElement('li');
        li.className = 'project-item';
        li.dataset.projectId = project.id;
        li.innerHTML = `
            <span>${project.title}</span>
            <span class="task-count">${project.tasks.length}</span>
        `;
        return li;  // Remove the delete button creation here
    }


    static createTaskElement(task) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.dataset.taskId = task.id;
        li.innerHTML = `
            <div class="checkbox ${task.completed ? 'checked' : ''}"></div>
            <div class="task-details">
                <div class="task-title">${task.title}</div>
                ${task.description ? `<div class="task-description">${task.description}</div>` : ''}
                ${task.dueDate ? `<div class="task-due-date">Due: ${task.dueDate}</div>` : ''}
                <div class="task-meta">
                    <span class="priority priority-${task.priority}">${task.priority}</span>
                </div>
            </div>
        `;
        return li;
    }
}
