import { Injectable } from '@angular/core';
import { CourseService } from 'src/app/shared/service/course.service';
import {
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseResolver implements Resolve<any> {
  constructor(

    private courseService: CourseService,

  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any> {
    return this.courseService.getCourse(route.params['id']);
  }

}
