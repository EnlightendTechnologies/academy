import { Injectable } from '@angular/core';

import {

  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Injectable({
  providedIn: 'root',
})
export class FacultyResolver implements Resolve<any> {
  constructor(

    private facultyService: FacultyService,

  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.facultyService.getFacultyById(route.params['id']);
  }

}
