import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegisterComponent } from './Admin/admin-register/admin-register.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { FeeDetailsComponent } from './Student/fee-details/fee-details.component';
import { GradesComponent } from './Student/grades/grades.component';
import { HomeComponent } from './Student/home/home.component';
import { LoginComponent } from './Student/login/login.component';
import { RegisterComponent } from './Student/register/register.component';
import { ShowDataComponent } from './Student/show-data/show-data.component';
import { StudentComponent } from './Student/student/student.component';

const routes: Routes = [
  {
    path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{
  path:"home",
  component:HomeComponent
},
{
    path:"Login",
    component:LoginComponent
},
  {path:"Admin", component:AdminComponent},
  {path:"register",component:RegisterComponent},
  {path:"edit/:id",component:RegisterComponent},
  {
    path:"show-data",component:ShowDataComponent},
    {
      path:"student",
      children:[
        {
          path:'',
          component:StudentComponent},
          {path:":id",component:StudentComponent},
      ]
      
    },
 {path:"adminReg",component:AdminRegisterComponent},
 {path:"fees",component:FeeDetailsComponent},
 {path:"grades",component:GradesComponent}
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
