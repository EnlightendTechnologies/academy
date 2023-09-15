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
  isLoading: boolean = false;
  courseForm: FormGroup;
  file!:File
  uploadedImages: string[] = [];


  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {
    this.courseForm = this.formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      fee: [''],
      imageUrl: [''],
      courseIntroduction:['fewfewfewffewfwfw'],
      syllabus:['fewfewfewfwwfwf']
    });
  }
  submitForm(): void {
    console.log(this.courseForm);
    if (this.courseForm.invalid) return;
    this.courseService.createCourse(this.courseForm.value, this.file).subscribe({
      next: (response:any) => {
        this.isLoading = false;
        this.courseForm.reset();
      },
      error: (error:any) => console.error('Failed to fetch courses:', error),
    })

  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
     this.file = file
    }
  }

}
