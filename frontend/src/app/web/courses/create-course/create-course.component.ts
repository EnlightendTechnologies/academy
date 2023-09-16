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
      name: [''],
      description: [''],
      fee: [''],
      imageUrl: [''],
      courseIntroduction: ['fewfewfewffewfwfw'],
      syllabus: ['fewfewfewfwwfwf']
    });
  }
  submitForm(): void {
    console.log(this.courseForm);
    if (this.courseForm.invalid) return;

    // const payload: Course = {
    //   id: '',
    //   name: this.courseForm.value.name,
    //   description: this.courseForm.value.description,
    //   fee: this.courseForm.value.fee,
    //   imageUrl: this.file,
    //   courseIntroduction: this.courseForm.value.courseIntroduction,
    //   syllabus: this.courseForm.value.syllabus,
    // };

    //   console.log(this.courseForm.value);

    //   this.courseService.createCourse(payload).subscribe({
    //     next: (response: any) => {
    //       this.isLoading = false;
    //       this.courseForm.reset();
    //     },
    //     error: (error: any) => console.error('Failed to create course:', error),
    //   });
    // }


  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = file
    }
  }
}
