import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  selectedCourses: any[];
  isLoading: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.selectedCourses = [];
    this.fetchCourses()
  }
  selectCourses() {
    for (let i = 0; i < 15; i++) {
      this.selectedCourses[i] = { "id": i }
    }
  }
  fetchCourses(): void {
    this.isLoading = true;
    this.activatedRoute.data.subscribe(
      (response: any) => {
        console.log(response)
        this.isLoading = false;
        this.selectedCourses = response.getCourses.data.map((course: any) => ({
          ...course,
          checked: false,
        }));
      },
      (error: any) => {
        console.error('Failed to fetch courses:', error);
        this.isLoading = false;
      }
    );
  }
}
