import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgIf,NgForOf],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  orderdata:any;
  constructor(private product:ProductService){}
  ngOnInit():void{
      this.updateorders();
    }
    updateorders(){
     let seller:any = localStorage.getItem("seller");
     let id:number = seller && JSON.parse(seller).sellerId;
 
      this.product.getsellerorder(id).subscribe((result:any)=>{
        this.orderdata = result;
        console.log(result);
      })

    }
}
