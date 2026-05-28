import { Component,OnInit } from '@angular/core';
import { UserService } from '../services/user-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-component',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent  implements OnInit {

  users: any[] = [];
  selectedUser: any = { name: '', email: '' };
  api = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.api = 'GET http://localhost:3000/users';
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }
  editUser(user: any) {
    this.selectedUser = { ...user };
    this.api = `GET http://localhost:3000/users/${user.id}`;
  }

  saveUser() {
    if (this.selectedUser.id) {
      this.api = `PUT http://localhost:3000/users/${this.selectedUser.id}`;
      this.userService.updateUser(this.selectedUser.id, this.selectedUser)
        .subscribe(() => this.loadUsers());

    }
    else{
      this.api = 'POST http://localhost:3000/users';
      this.userService.createUser(this.selectedUser)
        .subscribe(() => this.loadUsers());
    }
    this.selectedUser = { name: '', email: '' };
  }

  deleteUser(id: number) {
    this.api = `DELETE http://localhost:3000/users/${id}`;
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }
}