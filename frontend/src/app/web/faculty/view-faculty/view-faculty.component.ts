import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faculty } from 'src/app/shared/model/Faculty';
import { CourseService } from 'src/app/shared/service/course.service';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.scss']
})
export class ViewFacultyComponent implements OnInit {
  id: string | number = -1;
  isLoading: boolean = false;
  facultyBean!: Faculty;

  constructor(private route: ActivatedRoute, private courseService: CourseService,) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getFaculty();
  }
  getFaculty() {
    this.courseService.getFacultyById(this.id).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.data) this.facultyBean = response.data as Faculty;
      },
      error: (error) => console.error('Failed to fetch courses:', error),
    });
  }
}
