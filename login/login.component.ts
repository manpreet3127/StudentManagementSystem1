import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
import { student } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;
  loading = false;
  submitted = false;
  data:any;

  constructor( private formBuilder:FormBuilder,
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router,
    private user:MyServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }

onSubmit(form:any){
  this.submitted=true;
  if(this.loginForm.invalid){
    return;
  }
  this.loading=true;
  this.http.get<any>("https://61caf4cf194ffe0017788a7d.mockapi.io/UserData").subscribe(data=>{
    const user=data.find((a:any)=>{
      return a . UserName== this.loginForm.value.UserName && a .Password===this.loginForm.value.Password
      
    })
if(user){
  alert("Login Successfully");
  this.loginForm.reset();
  this.router.navigate(['/student'],{relativeTo:this.route})
  
}else{
  alert("User NOT Found !!!!")

}

  })
  
}
}
