import { Injectable } from '@angular/core';
import { CourseService } from 'src/app/shared/service/course.service';

import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesResolver implements Resolve<any> {
  constructor(

    private courseService: CourseService,

  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.courseService.getCourses();
  }

}
