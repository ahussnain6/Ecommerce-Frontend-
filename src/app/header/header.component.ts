import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { product } from '../datatype';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgIf,NgSwitch,NgSwitchCase,NgForOf,NgbCollapse],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  public isCollapsed = true;
  header:any ="";
  searchResult:undefined | any[];
  menuType: string = 'default';
  sellerName:string="";
  userName:string="";
  cartlength:number | undefined;
  constructor(private product:ProductService,private route:Router){}
  ngOnInit():void{
    this.route.events.subscribe((val: any) => {
      if (val.url){
        const user = localStorage.getItem("user");
        const seller = localStorage.getItem("seller");
        if (seller && (val.url.includes('seller'))){
        //  let sellerStore = localStorage.getItem('seller');
         let sellerData =seller && JSON.parse(seller);
         this.sellerName= sellerData.name;
          this.menuType = 'seller';
        } else if(user){
          // let userStore = localStorage.getItem('user');
          let userData = user && JSON.parse(user);
          this.userName= userData.name;
          this.menuType='user';
          this.product.getlocalcart(user && JSON.parse(user).userId);
        }
         else {
          this.menuType = 'default';
        }
  }})
  }
  logout(){
    localStorage.removeItem("seller");
    this.route.navigate([""]);
  }
  userLogout(){
    localStorage.removeItem("user");
    this.route.navigate([""]);
  }
searchProduct(query:KeyboardEvent){
  if(query){
    const element = query.target as HTMLInputElement;
    this.product.searchProduct(element.value).subscribe((result)=>{
      this.searchResult=result;
    })
  }
}
hideSearch(){
  this.searchResult=undefined
}
redirectToDetails(id:number){
  this.route.navigate(['/details/'+id])
}
}
