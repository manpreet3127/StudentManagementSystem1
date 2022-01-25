import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { student } from '../register/register.component';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit,OnDestroy {
//currentUser:student;
//var localStorage: Storage;
//users:student[]=[];
users:any;
id:any;
private sub!:Subscription


  constructor(private userService:MyServiceService,private rote:ActivatedRoute,
    private router:Router) {
    //this.currentUser=(JSON.parse(localStorage.getItem('currentUser')!));
   }

  ngOnInit(): void {
    this.sub=this.rote.params.subscribe(params=>{
      this.id=parseInt(params['id']);
      this.userService.UserData(this.id).subscribe(users=>{
        this.users=users;
      })
    })

  }
ngOnDestroy(){
  this.sub.unsubscribe();
}
feesDetails(){
this.router.navigate(['/fees'])
}
grades(){
  this.router.navigate(['/grades'])
}
}
