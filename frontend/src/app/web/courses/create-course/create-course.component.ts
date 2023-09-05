import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CourseService } from 'src/app/shared/service/course.service';


@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {
  isisLoading:boolean = false;
  courseForm:FormGroup;
  

  constructor(private formBuilder: FormBuilder,private courseService:CourseService) { 
    this.courseForm = this.formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      fee: [''],
      imageUrl: [''],
    });
  }
  submitForm():void {
    console.log(this.courseForm);
    if(this.courseForm.invalid) return;
    this.courseService.createCourse(this.courseForm.value).subscribe({
      next:(response) => {
        this.isisLoading = false;
        this.courseForm.reset();
      },
      error: (error) => console.error('Failed to fetch courses:', error),
    })
     
  }
}
