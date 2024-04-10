import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent{
   imgurl:any;
  constructor(private product:ProductService,private route:Router){}
    seller:any = localStorage.getItem("seller");
    sellerId:any = this.seller && JSON.parse(this.seller).sellerId;
    geturl(e:any){
   const data = new FormData();
     data.append("file",e.target.files[0])
     data.append("folder","ecommerce")
     data.append('upload_preset',"ecommerce")
     data.append("cloud_name","dlcyf2qtl")
     data.append("api_key","358396761568598")
     data.append("api_secret","9uJDlY1h2_nM1GjJ48H7BihkTHg");
     this.product.getimgurl(data).subscribe((dat:any)=>{
      const obj = dat.body && dat.body.url;
      this.imgurl = obj;
     })
    }
  submit(data:any){
    let realdata:any={
      ...data,image:this.imgurl,sellerId:this.sellerId}; 
  this.product.postdata(realdata);
  if(data.name.length > 1 && data.price){
  this.route.navigate(["seller-home"]);
}
}
}
