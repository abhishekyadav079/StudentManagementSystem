import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentDetailsComponent } from './add-student-details/add-student-details.component';
import { DisplayStudentDetailsComponent } from './display-student-details/display-student-details.component';
import { HomeComponent } from './home/home.component';
import { UpdateStudentDetailsComponent } from './update-student-details/update-student-details.component';

const routes: Routes = [
  {component:AddStudentDetailsComponent, path:'add'},
  {component:UpdateStudentDetailsComponent, path:'update/:id'},
  {component:DisplayStudentDetailsComponent,path:'display'},
  {component:HomeComponent,path:'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
