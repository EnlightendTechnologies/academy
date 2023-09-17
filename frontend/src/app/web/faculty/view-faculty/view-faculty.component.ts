import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faculty } from 'src/app/shared/model/Faculty';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.scss']
})
export class ViewFacultyComponent implements OnInit {
  isLoading: boolean = false;
  facultyBean!: Faculty;

  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getFaculty();
  }
  getFaculty() {
    this.activatedRoute.data.subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response) this.facultyBean = response['getFaculty'].data as Faculty;
      },
      error: (error) => console.error('Failed to fetch courses:', error),
    });
  }
}
