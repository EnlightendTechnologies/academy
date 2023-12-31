import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '../model/HttpResponse';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get<any>(`${environment?.apiUrl}courses/`);
  }
  getCourse(id: string | number): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`${environment?.apiUrl}courses/${id}`)
  }
  createCourse(payload: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}courses/`,payload);
  }

}
