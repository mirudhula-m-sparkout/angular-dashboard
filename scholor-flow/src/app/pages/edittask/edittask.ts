import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TaskService, Task } from '../../services/taskservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-edittask',
  standalone: true,
  imports: [CommonModule, FormsModule, Navbar, RouterModule],
  templateUrl: './edittask.html',
  styleUrl: './edittask.css',
})
export class Edittask implements OnInit {

  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: TaskService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/tasks']);
      return;
    }

    //this.service.ensureLoaded();

    this.service.getTaskById(id).subscribe({
      next: (res) => this.task = res,
      error: () => this.router.navigate(['/tasks'])
    });
  }

  updateTask() {
    if (!this.task) return;

    this.service.updateTask(this.task).subscribe(() => {
      this.router.navigate(['/task', this.task!.id]);
    });
  }
}