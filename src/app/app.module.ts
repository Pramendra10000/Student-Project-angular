import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDashbordComponent } from './student-dashbord/student-dashbord.component';
//import { StudentmarksComponent } from './studentmarks/studentmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashbordComponent,
   // StudentmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
