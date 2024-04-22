import { Component, OnInit } from '@angular/core';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';
import { NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [NgForOf,NgIf],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent implements OnInit {
   quantity:number = 1;
productData:product | undefined;
  constructor(private product:ProductService,private router:Router,private route:ActivatedRoute){} 
ngOnInit():void{
  let productid:any = this.route.snapshot.paramMap.get("id");
  console.log(productid);
  productid && this.product.getsproduct(productid).subscribe((data)=>{
    this.productData = data;  })
  }
  handleQuantity(unique:any){
    if(unique === "plus" && this.quantity < 8){
      this.quantity += 1;
    }else if(unique === "min" && this.quantity > 1 ){
      this.quantity -=1;
    }}
addToCart(){
  if(!localStorage.getItem("user")){
     this.router.navigate(["user-sign"]);
    }
  let productid:any = this.route.snapshot.paramMap.get("id");
   this.product.getsproduct(productid).subscribe((result:any)=>{
    this.productData = result;
    let item:any = localStorage.getItem("user");
    let userId:any = item && JSON.parse(item).userId || JSON.parse(item)[0].userId;
    (!userId) && (this.router.navigate(["/"]));
    let cartdata:any = {
      ...result,
      userId:userId,
      productId:Number(productid),
      quantity :this.quantity} 
  userId && this.product.localaddtocart(cartdata); 
  this.router.navigate(["cart-page"]);
     
}    )
}
removeToCart(id:any){
  
this.product.delcart(id).subscribe((data)=>{
  this.router.navigate([""]);
  
   }
  )
}
}
