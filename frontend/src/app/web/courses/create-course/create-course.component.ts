import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {

  courseForm:FormGroup
  constructor(private formBuilder: FormBuilder,) { 
    this.courseForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      fee: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      imageUrl: ['', [Validators.required, Validators.email]],
    });
  }
  submitForm():void {
    
  }
}
