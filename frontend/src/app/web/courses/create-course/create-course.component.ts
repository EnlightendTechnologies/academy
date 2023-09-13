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
  uploadedImages: string[] = [];


  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {
    this.courseForm = this.formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      fee: [''],
      imageUrl: [''],
    });
  }
  submitForm(): void {
    console.log(this.courseForm);
    if (this.courseForm.invalid) return;
    this.courseService.createCourse(this.courseForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.courseForm.reset();
      },
      error: (error) => console.error('Failed to fetch courses:', error),
    })

  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.saveImageToLocalstorage(file);
    }
  }

  saveImageToLocalstorage(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result as string;

      // Store the image data in localStorage (not recommended for large images).
      localStorage.setItem('uploadedImage', imageData);

      // Optionally, you can display the image on the page.
      const imageElement = new Image();
      imageElement.src = imageData;
      document.body.appendChild(imageElement);
    };

    reader.readAsDataURL(file);
  }
}
