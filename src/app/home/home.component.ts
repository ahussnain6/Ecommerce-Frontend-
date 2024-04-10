import { NgForOf, NgIf, NgStyle } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,RouterLink,NgForOf,NgStyle,NgIf,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'})
export class HomeComponent implements OnInit {
  menuType: string = 'default';
  searchResult:undefined | any[];
  productlist:product[] | undefined;
constructor(private product:ProductService,private route:Router){}
ngOnInit(): void{
  this.product.getalldata().subscribe((data)=>{
    console.log(data);
    this.productlist = data;
     } )
  this.route.events.subscribe((val: any) => {
    if (val.url){
      if (localStorage.getItem('seller') && val.url.includes('seller')){
        this.menuType = 'seller';
      } else if(localStorage.getItem('user')){
        this.menuType='user';}
       else {
        this.menuType = 'default';}}})}
searchProduct(query:KeyboardEvent){
  if(query){
    const element = query.target as HTMLInputElement;
    this.product.searchProduct(element.value).subscribe((result)=>{
     
      this.searchResult=result;
    })}
}
hideSearch(){
  this.searchResult=undefined;
}
redirectToDetails(id:number){
this.route.navigate([`/details/${id}`])
}
submitSearch(val:string){
console.log(val);
}
}