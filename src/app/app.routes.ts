import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerSignComponent } from './seller-sign/seller-sign.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { verifyGuard } from './verify.guard';
import { UserSignComponent } from './user-sign/user-sign.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        component:SellerSignComponent,
        path:"seller-sign"
    },
    {
        component:SellerHomeComponent,
        path:"seller-home",
        canActivate:[verifyGuard]
    },
    {
        component:UserSignComponent,
        path:"user-sign"
    },
    {
        component:SellerAddProductComponent,
        path:"seller-add-product",
        canActivate:[verifyGuard]
    },
    {
        component: OrdersComponent,
        path:"seller-orders",
        canActivate:[verifyGuard]
    },
    {
        component:DetailPageComponent,
        path:"details/:id"
    },
    {
        component:CartpageComponent,
        path:"cart-page"
    }

];
