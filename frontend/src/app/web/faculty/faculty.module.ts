import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        FacultyComponent,
        ViewFacultyComponent
    ],
    imports: [
        CommonModule,
        FacultyRoutingModule,
        SharedModule
    ]
})
export class FacultyModule { }
