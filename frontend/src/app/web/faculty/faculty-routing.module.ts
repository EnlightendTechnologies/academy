import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { FacultiesResolver } from './faculties.resolver';
import { FacultyResolver } from './view-faculty/faculty.resolver';

const routes: Routes = [
  {
    path: '', component: FacultyComponent, resolve: { getFaculties: FacultiesResolver }
  },
  { path: 'detail/:id', component: ViewFacultyComponent, resolve: { getFaculty: FacultyResolver } },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
