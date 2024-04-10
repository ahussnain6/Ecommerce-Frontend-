import { NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, numberAttribute } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-cartpage',
  standalone: true,
  imports: [NgForOf,NgIf,FaIconComponent],
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.css'
})
export class CartpageComponent implements OnInit{
  pricetotal={ actualprice:0,  discount: 0, tax: 0, delivery: 0, total: 0}
cartdata:any;
icon = faTrash;
constructor(private product:ProductService,private router:Router){}
ngOnInit():void{
  this.updateproduct();
  this.router.navigate(["cart-page"]);
}
removeToCart(id:any){
  this.updateproduct();
this.product.delcart(id).subscribe((data)=>{
  alert("Item Deleted");
  this.updateproduct(); 
  
})}
updateproduct(){
 let data:any = localStorage.getItem("user");
 let id = (JSON.parse(data).userId)?(JSON.parse(data).userId):(JSON.parse(data)[0].userId); 
  this.product.getlocalcart(id).subscribe((result:any)=>{
    this.cartdata = result;
    let price = 0;
    result.forEach((item:any) => {
        if(item.quantity) {
          price = price + (+ item.price * + item.quantity)}     }       )
      this.pricetotal.actualprice = price;
      this.pricetotal.discount = price / 8;
      this.pricetotal.tax = Math.floor(price / 12);
      this.pricetotal.delivery = 100;
      this.pricetotal.total = Math.floor(price + (price / 12) + 100 - (price / 8));
})
}
}