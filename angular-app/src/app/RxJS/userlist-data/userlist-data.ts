import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-userlist-data',
  imports: [CommonModule],
  templateUrl: './userlist-data.html',
  styleUrl: './userlist-data.css',
})
export class UserlistData implements OnInit{

  users:any[]=[];
  loading=false;
  errormsg='';
  constructor(private http :HttpClient){}
  ngOnInit(){
    this.getusers();
  }
  getusers(){
    this.loading=true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next : (res:any) =>{
        this.users=res;
      },
      error : (err) =>{
        this.errormsg='Failed';
        this.loading=false;
      },
      complete : () =>{
        this.loading=false;
        console.log("Finished");
      }
    });
  }
}

