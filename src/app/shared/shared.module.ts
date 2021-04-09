import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SiderbarComponent
  ],
  exports:[
    SiderbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
