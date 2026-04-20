import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/taskservice';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  total = 0;
  completed = 0;
  pending = 0;

  constructor(private taskService: TaskService) {}
  
  ngOnInit() {
    this.taskService.fetchTasks();
    this.taskService.getTasks().subscribe(tasks => {
      this.total = tasks.length;
      this.completed = tasks.filter(t => t.status === 'Completed').length;
      this.pending = tasks.filter(t => t.status === 'Pending').length;
    });
  }
}