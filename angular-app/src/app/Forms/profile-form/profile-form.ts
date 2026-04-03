import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  imports: [FormsModule],
  templateUrl: './profile-form.html',
  styleUrl: './profile-form.css',
})
export class ProfileForm {

  profile= {
    name:'Miru.M',
    email:'miru321@gmail.com'
  }

}
