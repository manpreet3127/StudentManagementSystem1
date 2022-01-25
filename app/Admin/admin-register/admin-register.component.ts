import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
//import { student } from 'src/app/Student/register/register.component';
export interface admin{
  UserName:string;
  Password:string;

}

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  form!:FormGroup;
  loading=false;
  submitted=false;
  admin:any;
  constructor(private user:MyServiceService,
    private router:Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]]
  });
    this.getAdminData
  }
  
  get f() { return this.form.controls; }
  getAdminData(){
    this.user.getAdminData().subscribe(data=>{
   // console.warn(data)
    this.admin=data;
  });
}
  onregister(admin:admin){
    this.submitted = true;
    if (this.form.invalid) {
      return;}
      this.user.regAdmin(admin).subscribe(data=>{this.admin.push(admin)
      })
    if(admin){
      alert("Register Sucessfully")
      this.form.reset();
this.router.navigate(['/show-data']);
  //console.log(this.form);
    }else{
      alert("fill the form Correctly !!!!")
    }
}

    }

