import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NgFor, NgForOf } from '@angular/common';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [FormsModule,RouterLink,NgForOf,FaIconComponent,NgFor],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit{
  seller:any = localStorage.getItem("seller");
  id:number = this.seller && JSON.parse(this.seller).sellerId.toString();
  productList:product[] | undefined;
  productMessage: undefined | string;
  icon = faTrash;
  constructor(private product:ProductService,private router:Router){}
  ngOnInit():void{
    this.router.navigate(["seller-home"]);
    this.list();}
  deleteProduct(id:string){
    this.list();
  this.product.deleteProduct(id).subscribe((result)=>{
      this.list();
      if(result){
        this.productMessage = 'Product is deleted'; 
        this.list();
      } } );
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000)}
    list(){
      this.product.getspro(this.id).subscribe((result:product[])=>{
        if(result){
          this.productList = result;}else{
          this.productList = [];}})}
        }