import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/taskservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deletetask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deletetask.html',
  styleUrl: './deletetask.css',
})
export class Deletetask implements OnInit {


  id!: string;

  constructor(
    private route: ActivatedRoute, 
    private taskService: TaskService, //delete api
    private router: Router
  ) {}

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (!paramId) {
      this.router.navigate(['/tasks']);
      return;
    }

    this.id = paramId;
  }

  confirmDelete() {
    this.taskService.deleteTask(this.id).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }

  cancel() {
    this.router.navigate(['/tasks']);
  }
}