import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/shared/model/Faculty';
import { CourseService } from 'src/app/shared/service/course.service';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  facultyList:Faculty[] | undefined
  isLoading: boolean = false;


  constructor(private router: Router, private courseService: CourseService,) {

  }
  ngOnInit(): void {
    this.fetchFaculties();
  }
  fetchFaculties(): void {
    this.isLoading = true;
    this.courseService.getFaculty().subscribe({
      next: (response) => {
        this.isLoading = false;
        this.facultyList = response.data;
      },
      error: (error) => console.error('Failed to fetch courses:', error),
    });
  }
}
