import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CoursesResolver } from './courses.resolver';
import { CourseResolver } from './view-course/course.resolver';

const routes: Routes = [
  {
    path: '', component: CoursesComponent, resolve: { getCourses: CoursesResolver },
  },
  { path: 'detail/:id', component: ViewCourseComponent,resolve: { getCourse: CourseResolver } },
  { path: 'createCourse', component: CreateCourseComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
