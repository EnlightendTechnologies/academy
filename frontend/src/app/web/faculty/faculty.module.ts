import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRoutingModule } from './faculty-routing.module';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { SharedModule } from "../../shared/shared.module";
import { CourseService } from 'src/app/shared/service/course.service';
import { FacultyComponent } from './faculty.component';


@NgModule({
    declarations: [
      FacultyComponent,
      ViewFacultyComponent
    ],
    imports: [
        CommonModule,
        FacultyRoutingModule,
        SharedModule
    ],
    providers: [CourseService],
})
export class FacultyModule { }
