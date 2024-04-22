import { Component, OnInit } from '@angular/core';
import { login, sign, usersignup } from '../datatype';
import { SellerService } from '../services/seller.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-sign',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './user-sign.component.html',
  styleUrl: '../seller-sign/seller-sign.component.css'
})
export class UserSignComponent implements OnInit {
showLogin = false;
  constructor(private user:UserService){}
  ngOnInit():void{
    this.user.reloaduser();
  }
  signup(data:sign){
    let realdata:usersignup ={
      ...data,userId:new Date().getTime()
     } 
 if(data && data.username && data.email.length > 3 && data.password.length > 2){
       this.user.usersign(realdata);
       console.log(realdata);
      
 }else if(this.user.authError){
      alert("Invalid Input Data");
     }
  }
  login(data:login){
    if(data && data.email.length > 3 && data.password.length > 2){
      this.user.checkuser(data);
    }else if(this.user.authError){
     alert("Invalid Email or Password");
    }
  }
  getsignup(){
    this.showLogin = false;
  }
  getlogin(){
    this.showLogin = true;
  }
}
