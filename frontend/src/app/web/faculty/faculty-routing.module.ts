import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';

const routes: Routes = [
  {
    path: '', component: FacultyComponent,
  },
  { path: 'detail/:id', component: ViewFacultyComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
