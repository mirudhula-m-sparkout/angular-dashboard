import { Component } from '@angular/core';
import { TaskService, Task } from '../../services/taskservice'; // ✅ import Task
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    Navbar
  ],
  templateUrl: './addtask.html',
  styleUrl: './addtask.css',
})
export class Addtask {

  // type
  task: Task = {
    title: '',
    description: '',
    assignedTo: '',
    priority: 'Medium',   // now valid
    dueDate: '',
    status: 'Pending'
  };

  constructor(private taskService: TaskService, private router: Router) {}

  submit() {
    if (!this.task.title || !this.task.description || !this.task.assignedTo || !this.task.dueDate) {
      alert("All fields required");
      return;
    }

    this.taskService.addTask(this.task).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}