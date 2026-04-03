import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-formmodel1',
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './formmodel1.html',
  styleUrl: './formmodel1.css',
})
export class Formmodel1 {

  resumeForm= new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    skills: new FormArray ([
      new FormControl('')
    ])
  });

  get skills() {
    return this.resumeForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(new FormControl(''));
  }

  onSubmit(){
    console.log(this.resumeForm.value);
  }
}
