import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


import { BehaviorSubject, Observable } from 'rxjs';
import { admin } from './Admin/admin-register/admin-register.component';
import { student } from './Student/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  
//  var localStorage:Storage;
private url="https://61caf4cf194ffe0017788a7d.mockapi.io"
private adminUrl="https://61caf4cf194ffe0017788a7d.mockapi.io/admin"
  constructor(private http:HttpClient) { 
  }
  getData(){
    let endPoints="/UserData";
    return this.http.get(this.url+endPoints);
  }
  addStudent(userData:student):Observable<student[]>{
    let endPoints="/UserData";
  return this.http.post<student[]>(this.url+endPoints,userData)
  }
  deleteStudent(id:number):Observable<student[]> {
    let endPoints="/UserData/"+id;
    return this.http.delete<student[]>(this.url+endPoints);
  }
  updateStudent(info:student):Observable<student[]>{
    let endPoints=`/UserData/${info.id}`;
    return this.http.put<student[]>(this.url+endPoints,info);
    }
    regAdmin(admin:admin):Observable<admin[]>{
      return this.http.post<admin[]>(this.adminUrl,admin)

    }
    getAdminData(){
      return this.http.get(this.url);
    }
    getDataByID(id:number):Observable<student[]>{
      let endPoints="/UserData/"+id;
      return this.http.get<student[]>(this.url+endPoints)
    }
    
    UserData(id:number):Observable<student>{
      let endPoints="/UserData/"+id;
return this.http.get<student>(this.url+endPoints)
    }
}
