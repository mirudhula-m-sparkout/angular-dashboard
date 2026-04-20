import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

export interface Task {
  id?: number | string;
  title: string;
  description: string;
  assignedTo: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private API_URL = 'http://localhost:4000/tasks';

  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) {}

  //prevents empty state
  ensureLoaded() {
    if (this.tasksSubject.value.length === 0) {
      this.fetchTasks();
    }
  }

  fetchTasks() {
    this.http.get<Task[]>(this.API_URL)
      .subscribe(data => this.tasksSubject.next(data));
  }

  getTasks() {
    return this.tasks$;
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.API_URL, task).pipe(
      tap((newTask) => {
        this.tasksSubject.next([...this.tasksSubject.value, newTask]);
      })
    );
  }

  deleteTask(id: number | string) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(
      tap(() => {
        this.tasksSubject.next(
          this.tasksSubject.value.filter(t => t.id != id) // string compare
        );
      })
    );
  }

  updateTask(task: Task) {
    return this.http.put<Task>(`${this.API_URL}/${task.id}`, task).pipe(
      tap((updated) => {
        const list = this.tasksSubject.value.map(t =>
          t.id == updated.id ? updated : t
        );
        this.tasksSubject.next(list);
      })
    );
  }

  //handles the refresh case
 getTaskById(id: number | string) {
  return this.http.get<Task>(`${this.API_URL}/${id}`);
}
}