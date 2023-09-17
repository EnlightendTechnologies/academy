import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculty } from 'src/app/shared/model/Faculty';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  facultyList: Faculty[] | undefined
  isLoading: boolean = false;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.fetchFaculties();
  }
  fetchFaculties(): void {
    this.isLoading = true;
    this.activatedRoute.data.subscribe({
      next: (response) => {
        this.isLoading = false;
        this.facultyList = response['getFaculties'].data;
      },
      error: (error) => console.error('Failed to fetch courses:', error),
    });
  }
}
