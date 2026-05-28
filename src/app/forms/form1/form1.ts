import { Component } from '@angular/core';
import{FormArray,FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form1',
  imports: [
    CommonModule,
    ReactiveFormsModule
   ],
  templateUrl: './form1.html',
  styleUrl: './form1.css',
})
export class Form1 {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      skills:this.fb.array([this.createSkill()])
    });
  }

  createSkill() {
    return this.fb.control('');
  }

  get skills() : FormArray {
    return this.form.get('skills') as FormArray;
  }

  addSkill() { 
    this.skills.push(this.createSkill());
  }   

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  } 
}
