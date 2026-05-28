import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  baseUrl = environment.apiBaseUrl + '/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  updateUser(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

