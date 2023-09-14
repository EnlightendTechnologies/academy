import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomeComponent } from './home/home.component';
import { WebComponent } from './web.component';






const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterPageComponent },
      {
        path: 'courses', loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule),
      },
      { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then((m) => m.FacultyModule) }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class WebRoutingModule { }
