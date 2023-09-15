import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '../model/HttpResponse';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  // Get All Courses
  getCourses(): Observable<any> {
    return this.http.get<any>(`${environment?.apiUrl}courses/`);
  }
  getCourse(id: string | number): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`${environment?.apiUrl}courses/${id}`)
  }
  createCourse(payload: any, file: File): Observable<any> {
    const formData = new FormData();
    for (const key in payload) {
      formData.append(key, payload[key]);
    }
    formData.append('file', file);

    return this.http.post<any>(`${environment.apiUrl}courses/`, formData);
  }

  getFaculty(): Observable<any> {
    return this.http.get<HttpResponse>(`${environment?.apiUrl}faculty/`);
  }
  getFacultyById(id: string | number): Observable<any> {
    return this.http.get<HttpResponse>(`${environment?.apiUrl}faculty/${id}`);
  }
}
