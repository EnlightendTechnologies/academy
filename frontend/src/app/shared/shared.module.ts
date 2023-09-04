import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoaderComponent],
  exports: [LoaderComponent,ReactiveFormsModule,FormsModule],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
