import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '../model/HttpResponse';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }
  getFaculty(): Observable<any> {
    return this.http.get<HttpResponse>(`${environment?.apiUrl}faculty/`);
  }
  getFacultyById(id: string | number): Observable<any> {
    return this.http.get<HttpResponse>(`${environment?.apiUrl}faculty/${id}`);
  }
}
