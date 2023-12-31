import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesComponent } from './courses.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseService } from 'src/app/shared/service/course.service';


@NgModule({
  declarations: [CoursesComponent,ViewCourseComponent,CreateCourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[CourseService]
})
export class CoursesModule { }
