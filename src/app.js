import { Project } from './project.js';
import { Task } from './task.js';
import { DOM } from './dom.js';

export class App {
    constructor() {
        this.projects = JSON.parse(localStorage.getItem('projects')) || [];
        this.currentProjectId = null;
        this.init();
    }
    init() {
        this.createBaseStructure();
        this.setupEventListeners();
        if (this.projects.length === 0) {
            this.createDefaultProjects();
        }
        this.renderProjects();
        this.selectProject(this.projects[0].id);
    }


    deleteProject(projectId) {
        if (this.projects.length <= 1) return;
        this.projects = this.projects.filter(p => p.id !== projectId);
        if (this.currentProjectId === projectId) {
            this.selectProject(this.projects[0].id);
        }
        this.saveToStorage();
        this.renderProjects();
    }

    createBaseStructure() {
        document.body.innerHTML = `
            <header class="header">
                <h1>Thingy</h1>
            </header>
            <div class="main-container">
                <nav class="sidebar">
                    <button class="add-task-btn">+ New Task</button>
                    <ul class="projects-list"></ul>
                    <button class="add-project-btn">+ New Project</button>
                    <button class="clear-completed-btn">Clear Completed Tasks</button>
                </nav>
                <main class="content">
                    <ul class="task-list"></ul>
                </main>
                <!-- Add these modals -->
                <div class="modal">
                    <div class="modal-content">
                        <form id="task-form">
                            <h3>New Task</h3>
                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" name="title" required>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea name="description"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Priority</label>
                                <select name="priority" required>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Due Date</label>
                                <input type="date" name="dueDate">
                            </div>
                            <div class="form-group">
                                <label>Project</label>
                                <select name="projectId" required></select>
                            </div>
                            <div class="form-actions">
                                <button type="button" class="btn btn-secondary cancel-btn">Cancel</button>
                                <button type="submit" class="btn btn-primary">Create Task</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="project-modal modal">
                    <div class="modal-content">
                        <form id="project-form">
                            <h3>New Project</h3>
                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" name="title" required>
                            </div>
                            <div class="form-actions">
                                <button type="button" class="btn btn-secondary cancel-btn">Cancel</button>
                                <button type="submit" class="btn btn-primary">Create Project</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }


    renderProjects() {
        const projectsList = document.querySelector('.projects-list');
        projectsList.innerHTML = '';
        this.projects.forEach(project => {
            const element = DOM.createProjectElement(project);
            if (project.id === this.currentProjectId) {
                element.classList.add('active');
            }
            element.addEventListener('click', () => this.selectProject(project.id));
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-project-btn';
            deleteBtn.innerHTML = '✕';
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteProject(project.id);
            });
            
            element.appendChild(deleteBtn);
            projectsList.appendChild(element);
        });
    }


    selectProject(projectId) {
        this.currentProjectId = projectId;
        document.querySelectorAll('.project-item').forEach(item => {
            item.classList.remove('active');
           if (item.dataset.projectId === projectId) {
                item.classList.add('active');
            }
        });
        this.renderTasks();
    }

    renderTasks() {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = '';
        const project = this.projects.find(p => p.id === this.currentProjectId);
        
        if (!project) return;
        
        project.tasks.forEach(task => {
            const element = DOM.createTaskElement(task);
            element.querySelector('.checkbox').addEventListener('click', () => this.toggleTask(task.id));
            element.addEventListener('contextmenu', e => this.deleteTask(e, task.id));
            taskList.appendChild(element);
        });
    }

    setupEventListeners() {
        document.querySelector('.add-task-btn').addEventListener('click', () => this.showTaskModal());
        document.querySelector('.add-project-btn').addEventListener('click', () => this.showProjectModal());
        document.querySelector('.clear-completed-btn').addEventListener('click', () => this.clearCompletedTasks());
        document.querySelector('.modal').addEventListener('click', e => {
            if (e.target.classList.contains('modal')) this.hideModals();
        });
        document.querySelectorAll('.cancel-btn').forEach(btn => {
            btn.addEventListener('click', () => this.hideModals());
        });
        document.getElementById('task-form').addEventListener('submit', e => this.handleTaskSubmit(e));
        document.getElementById('project-form').addEventListener('submit', e => this.handleProjectSubmit(e));
    }

    showTaskModal() {
        const modal = document.querySelector('.modal');
        const projectSelect = modal.querySelector('select[name="projectId"]');
        projectSelect.innerHTML = this.projects.map(p => 
            `<option value="${p.id}">${p.title}</option>`
        ).join('');
        projectSelect.value = this.currentProjectId;
        modal.style.display = 'flex';
    }

    showProjectModal() {
        document.querySelector('.project-modal').style.display = 'flex';
    }

    hideModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    handleTaskSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const project = this.projects.find(p => p.id === formData.get('projectId'));
        
        const task = new Task(
            formData.get('title'),
            formData.get('description'),
            formData.get('priority'),
            formData.get('projectId'),
            formData.get('dueDate')
        );
        
        project.addTask(task);
        this.saveToStorage();
        this.renderTasks();
        this.hideModals();
        e.target.reset();
    }

    handleProjectSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const project = new Project(formData.get('title')); // isDefault will be false by default
        this.projects.push(project);
        this.saveToStorage();
        this.renderProjects();
        this.hideModals();
        e.target.reset();
    }

    deleteProject(projectId) {
        if (this.projects.length <= 1) return;
        this.projects = this.projects.filter(p => p.id !== projectId);
        if (this.currentProjectId === projectId) {
            this.selectProject(this.projects[0].id);
        }
        this.saveToStorage();
        this.renderProjects();
    }

    toggleTask(taskId) {
        const project = this.projects.find(p => p.id === this.currentProjectId);
        const task = project.tasks.find(t => t.id === taskId);
        task.completed = !task.completed;
        this.saveToStorage();
        this.renderTasks();
    }

    deleteTask(e, taskId) {
        e.preventDefault();
        const project = this.projects.find(p => p.id === this.currentProjectId);
        project.deleteTask(taskId);
        this.saveToStorage();
        this.renderTasks();
    }

    clearCompletedTasks() {
        const project = this.projects.find(p => p.id === this.currentProjectId);
        project.tasks = project.tasks.filter(task => !task.completed);
        this.saveToStorage();
        this.renderTasks();
    }

    saveToStorage() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }
}