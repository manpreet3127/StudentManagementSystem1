import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loading = false;
  submitted = false;
  data:any;
  loginForm!: FormGroup;
  constructor(private user:MyServiceService,
    private route:Router,
    private http:HttpClient,
    private formBuilder:FormBuilder) { }

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
    this.http.get<any>("https://61caf4cf194ffe0017788a7d.mockapi.io/admin").subscribe(data=>{
      const user=data.find((a:any)=>{
        return a . UserName== this.loginForm.value.UserName && a .Password===this.loginForm.value.Password
  
      })
  if(user){
    alert("Login Successfully");
    this.loginForm.reset();
    this.route.navigate(['/show-data'])
  }else{
    alert("User NOT Found !!!!")
  
  }
  
    })
}}
