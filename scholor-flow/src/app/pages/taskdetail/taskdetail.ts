import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // ✅ ADD
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../../services/taskservice';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-taskdetail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './taskdetail.html',
  styleUrl: './taskdetail.css',
})
export class Taskdetail implements OnInit {

  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private cd: ChangeDetectorRef   
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (!id) {
      this.router.navigate(['/tasks']);
      return;
    }

    this.taskService.getTaskById(id).subscribe({
      next: (res) => {
        console.log('DATA:', res);
        this.task = res;

        this.cd.detectChanges(); 
      },
      error: () => this.router.navigate(['/tasks'])
    });
  }

  markCompleted() {
  if (!this.task) return;

  const newStatus =
    this.task.status === 'Completed' ? 'Pending' : 'Completed';

  const updated: Task = {
    ...this.task,
    status: newStatus
  };

  this.taskService.updateTask(updated).subscribe((res) => {
    this.task = res;
    this.cd.detectChanges();
  });
 }

  goEdit() {
    if (!this.task?.id) return;
    this.router.navigate(['/edit-task', this.task.id]);
  }
}