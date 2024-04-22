import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cart, product } from '../datatype';
@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private http:HttpClient){}
  postdata(data:product){
  return this.http.post("https://mean-backend-bay.vercel.app/Seller/addproduct",data,{observe:"response"}).subscribe((result)=>{
  if(result && result.body){localStorage.setItem("product",JSON.stringify(result.body));}}) ;
};
getdata(id:number){
 return this.http.get<product[]>(`https://mean-backend-bay.vercel.app/Seller/getorder/${id}`);
}
getalldata(){
  return this.http.get<product[]>(`https://mean-backend-bay.vercel.app/Product/get`);
 }
getsproduct(id:number){
  return this.http.get<product>(`https://mean-backend-bay.vercel.app/Product/getid/${id}`);
}

getspro(id:number){
  return this.http.get<product[]>(`https://mean-backend-bay.vercel.app/Product/getpro/${id}`);
}

deleteProduct(id:string){
  return this.http.delete(`https://mean-backend-bay.vercel.app/Product/delete/${id}`);}
localaddtocart(data:any){
  return this.http.post(`https://mean-backend-bay.vercel.app/Buyer/addtocart`,data,{observe:"response"}).subscribe((result)=>{  
    if(result && result.body){localStorage.setItem("cart",JSON.stringify(result.body));}
})}
getlocalcart(id:number){
  return this.http.get(`https://mean-backend-bay.vercel.app/Buyer/getcart/${id}`);
}
getimgurl(data:any){
return  this.http.post(`https://api.cloudinary.com/v1_1/dlcyf2qtl/image/upload`,
data,{observe:"response"});
}
delcart(id:number){
  return this.http.delete(`https://mean-backend-bay.vercel.app/Buyer/delcart/${id}`);}
getsellerorder(id:number){
  return this.http.get(`https://mean-backend-bay.vercel.app/Seller/getorder/${id}`)
}
searchProduct(query: string) {
  return this.http.get<product[]>(`https://mean-backend-bay.vercel.app/Product/search/${query}`);}
}

