import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { login, sign } from '../datatype';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({providedIn: 'root'})
export class SellerService implements OnInit {
  authError = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient,private route:Router){}
  ngOnInit():void{this.reloadseller();}
  reloadseller(){
    if(localStorage.getItem("seller")){
      
      this.route.navigate(["seller-home"]);}}
  postsign(data:sign){
     data && this.http.post("https://mean-backend-bay.vercel.app/Seller/Signup",
     data,{observe:"response"}
     ).subscribe((data)=>{
   if(data){
      localStorage.setItem("seller",JSON.stringify(data.body))
      this.reloadseller();
      this.route.navigate(["seller-home"]);}
    else{
      this.authError.next(true);
      this.route.navigate([""]); 
}   })}
checklogin(data:login){
this.http.post(`https://mean-backend-bay.vercel.app/Seller/Login`,data,{observe:"response"}).subscribe((datas:any)=>{  
if(datas.ok){ 
      localStorage.setItem("seller",JSON.stringify(datas.body));
      this.reloadseller();
      this.route.navigate(["seller-home"])
    }else{
     this.authError.next(true);
     this.route.navigate([""]);
    }})}
}
