import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
import { student } from '../register/register.component';
import { Data } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  pageLength :any;
  page:number=1;
  data:any;
  @Input()editMode:boolean=false;
  @Input() edituserid:any;
   @ViewChild('form') form!:FormGroup;
  //data:any[]=[];
  constructor( private user : MyServiceService , 
    private route :RouterModule,
    private router:Router) { }

  ngOnInit(): void {
    this.getData()
  }
  getData()
  {
    this.user.getData().subscribe(data =>{
    //console.warn(data);
    this.data=data;
  });
}
onSubmit(userData:student){
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
    this.user.addStudent(userData).subscribe(data=>{this.data.push(userData)
    })
  }
  
  }
  
    

deleteItem(item:any){
  this.user.deleteStudent(item.id).subscribe(data=>{
  this.data=this.data.filter(data=>data.id!==item.id)
  })
}

editData(studentId:number){
  this.router.navigate(['/edit',studentId]);
}
userdata(id:number){
  this.router.navigate(['/student',id]);
}
}