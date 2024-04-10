import { NgIf, NgIfContext } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { login, sign } from '../datatype';
import { SellerService } from '../services/seller.service';
@Component({
  selector: 'app-seller-sign',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './seller-sign.component.html',
  styleUrl: './seller-sign.component.css'
})
export class SellerSignComponent {
authMessage:string | undefined;
showLogin = false;
constructor(private seller:SellerService){}
ngOnInit():void{
  this.seller.reloadseller();}
signup(data:sign){
      let realdata:any ={
       ...data,selID:new Date().getTime().toString()} 
    data && data.username && data.email.length > 3 && data.password.length > 3  && 
    this.seller.postsign(realdata);
  };
login(data:login){
  data && data.email.length > 3 && data.password.length > 3 && this.seller.checklogin(data);  
}
getsignup(){this.showLogin = false;}
getlogin(){
  this.showLogin = true;}}
