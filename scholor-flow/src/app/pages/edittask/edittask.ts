import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TaskService, Task } from '../../services/taskservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edittask',
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule
  ],
  templateUrl: './edittask.html',
  styleUrl: './edittask.css',
})
export class Edittask implements OnInit {

  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: TaskService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadTask();
  }

  loadTask() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/tasks']);
      return;
    }

    this.service.getTaskById(id).subscribe({
      next: (res) => {
        this.task = {
          id: res.id,
          title: res.title,
          description: res.description,
          assignedTo: res.assignedTo,
          priority: res.priority,
          dueDate: res.dueDate,
          status: res.status
        };
        this.cd.detectChanges();
      },
      error: () => this.router.navigate(['/tasks'])
    });
  }

  updateTask() {
    if (!this.task) return;

    this.service.updateTask(this.task).subscribe(() => {
      //this.task!.id: (!) = typeScript non-null assertion operator

      this.router.navigate(['/task', this.task!.id]);
    });
  }
}

