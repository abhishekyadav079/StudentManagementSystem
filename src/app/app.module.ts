import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentDetailsComponent } from './add-student-details/add-student-details.component';
import { UpdateStudentDetailsComponent } from './update-student-details/update-student-details.component';
import { DisplayStudentDetailsComponent } from './display-student-details/display-student-details.component';
import{HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentDetailsComponent,
    UpdateStudentDetailsComponent,
    DisplayStudentDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
