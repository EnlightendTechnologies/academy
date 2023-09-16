import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Course } from 'src/app/shared/model/Course';
import { CourseService } from 'src/app/shared/service/course.service';


@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {
  isLoading: boolean = false;
  courseForm: FormGroup;
  file!: File
  uploadedImages: string[] = [];


  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {
    this.courseForm = this.formBuilder.group({
      id: [''],
      name: ['vrvervreverv'],
      description: ['fdgfdgfdgfdgfd'],
      fee: ['3000'],
      imageUrl: ['regrere'],
      courseIntroduction: ['fewfewfewffewfwfw'],
      syllabus: ['fewfewfewfwwfwf']
    });
  }
  submitForm(): void {
    console.log(this.courseForm);
    if (this.courseForm.invalid) return;
      console.log(this.courseForm.value);

      this.courseService.createCourse(this.courseForm.value).subscribe({
        next: (response: any) => {
          this.isLoading = false;
          this.courseForm.reset();
        },
        error: (error: any) => console.error('Failed to create course:', error),
      });
    }

    onFileSelected(event: any) {
      const file = event.target.files[0];
      if (file) {
        this.file = file
      }
    }
  }


