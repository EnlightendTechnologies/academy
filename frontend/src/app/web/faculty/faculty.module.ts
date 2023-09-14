import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';


@NgModule({
  declarations: [
    FacultyComponent,
    ViewFacultyComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule
  ]
})
export class FacultyModule { }
