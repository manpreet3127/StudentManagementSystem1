import { Component, OnInit,Input,ViewChild, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, NgControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

import { MyServiceService } from 'src/app/my-service.service';
export interface student{
  UserName:string;
  FirstName:string
  LastName:string;
  Class:string;
  Email:string;
  Password:string;
  id:number;
  //currentUser:string;
 
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!:FormGroup;
  loading=false;
  submitted=false;
  @Input() editMode:boolean=false;
  @Input() edituserid:any;
  @ViewChild('form') 
student:any
  constructor(private formBuilder: FormBuilder,
    private user: MyServiceService,
     private route :Router) {
      this.student=[];
     }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      UserName: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Class:['',Validators.required],
      Email:['',Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]]
  });
  this.getData()
}
get f() { return this.form.controls; }
editStudent(studentData:any){
  this.edituserid=studentData;
   this.editMode=true;
this.form.setValue({
   UserName:studentData.UserName,
   FirstName:studentData.FirstName,
   LastName:studentData.LastName,
   Class:studentData.Class,
   Email:studentData.Email,
   Password:studentData.Password
  });
}
  getData(){
    this.user.getData().subscribe(data=>{
   // console.warn(data)
    this.student=data;
  });

  }
onSubmit(userData:student){
  this.submitted = true;
  if (this.form.invalid) {
    return;}

    if (this.editMode){
      //console.log(this.edituserid)
      
    this.user.updateStudent(userData).subscribe(data =>
      {
        //console.warn(data);
        this.getData()
        
      });
   
    }else{
      console.log(userData)
      //this.data.push(userData)
      this.user.addStudent(userData).subscribe(data=>{this.student.push(userData)
      })
    if(userData){
      alert("Register Sucessfully")
      this.form.reset();
this.route.navigate(['/show-data']);
  //console.log(this.form);
    }else{
      alert("fill the form Correctly !!!!")
    }
}



}}

