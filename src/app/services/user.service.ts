import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { login, sign, usersignup } from '../datatype';
@Injectable({
  providedIn: 'any'})
export class UserService implements OnInit{
  authError = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient,private route:Router) { }
  ngOnInit():void{
    this.reloaduser();
  }
  reloaduser(){
    if(localStorage.getItem("user")){
      this.route.navigate([""]);  } }
     usersign(data:any){
   data && this.http.post("https://mean-backend-bay.vercel.app/Buyer/Signup",data,{observe:"response"}).subscribe((data)=>{
   if(data.ok){
      localStorage.setItem("user",JSON.stringify(data.body));
      this.reloaduser();
      this.route.navigate([""])
    }
      else{
        alert("Invalid Input Data");
        this.route.navigate([""]);
           }
    })}
checkuser(data:login){
this.http.post(`https://mean-backend-bay.vercel.app/Buyer/Login`,data,{observe:"response"}).subscribe((datas:any)=>{
    if(datas.ok){
      localStorage.setItem("user",JSON.stringify(datas.body));
      this.reloaduser();
      this.route.navigate([""])
    }else{
     alert("Wrong Email or Password");
     this.route.navigate([""]);
        }})}
}
