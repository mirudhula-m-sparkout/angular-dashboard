import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/taskservice';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    Navbar
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {

  tasks: Task[] = [];

  total = 0;
  completed = 0;
  pending = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.fetchTasks();

    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;

      this.total = res.length;
      this.completed = res.filter(t => t.status === 'Completed').length;
      this.pending = res.filter(t => t.status === 'Pending').length;
    });
  }
}