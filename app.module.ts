import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Student/home/home.component';
import { LoginComponent } from './Student/login/login.component';
import { RegisterComponent } from './Student/register/register.component';
import { StudentComponent } from './Student/student/student.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule,  } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowDataComponent } from './Student/show-data/show-data.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AdminRegisterComponent } from './Admin/admin-register/admin-register.component';
import { FeeDetailsComponent } from './Student/fee-details/fee-details.component';
import { GradesComponent } from './Student/grades/grades.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    AdminComponent,
    ContainerComponent,
    ShowDataComponent,
    AdminRegisterComponent,
    FeeDetailsComponent,
    GradesComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
