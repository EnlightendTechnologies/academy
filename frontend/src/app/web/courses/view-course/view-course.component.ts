import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/model/Course';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {
  id: string | number = -1;
  isLoading: boolean = false;
  courseList: Course[] = [];

  constructor(private route: ActivatedRoute, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getCourse();
  }
  getCourse(): void {
    this.activatedRoute.data.subscribe({
      next: (response) => {
        this.isLoading = false;
        this.courseList.push(response['getCourse'].data as unknown as Course)
      },
      error: (error) => console.error('Failed to fetch courses:', error),
    });
  }
}
