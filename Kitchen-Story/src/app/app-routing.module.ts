
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AboutComponent } from './component/admin/about/about.component';
import { HomeComponent } from './component/admin/home/home.component';
import { LoginComponent } from './component/admin/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CreateComponent } from './component/admin/products/create/create.component';
import { ProductRoutingModule } from './component/admin/products/product-routing.module';
import { ProductsComponent } from './component/admin/products/products.component';
import { UpdateComponent } from './component/admin/products/update/update.component';
import { RegisterComponent } from './component/admin/register/register.component';
import { BuyerRegisterComponent } from './component/buyers/buyerregister/buyerregister.component';
import { BuyerLoginComponent } from './component/buyers/buyerlogin/buyerlogin.component';
import { BuyProductsComponent } from './component/buyers/products/products.component';
import { CartComponent } from './component/buyers/cart/cart.component';
import { BuyersComponent } from './component/buyers/buyers.component';
import { CheckoutComponent } from './component/buyers/checkout/checkout.component';
import { OrderComponent } from './component/buyers/order/order.component';
import { NavbarComponent } from './component/admin/navbar/navbar.component';
import { BuyerNavbarComponent } from './component/buyers/buyernavbar/buyernavbar.component';



//1. define routes
const routes: Routes = [

  { path:'buyerlogin', component:BuyerLoginComponent},
  { path:'home', component:HomeComponent},
  { path:'about', component:AboutComponent},
  { path:'register', component:RegisterComponent},
  { path:'buyerregister', component:BuyerRegisterComponent},
  { path:'products', loadChildren: ()=> import('./component/admin/products/product-routing.module').then(m=> m.ProductRoutingModule)},
  { path:'buyproducts',component:BuyProductsComponent },
  { path:'cart',component:CartComponent },
  { path:'checkout',component:CheckoutComponent },
  { path:'order',component:OrderComponent },
  { path:'navbar',component:NavbarComponent },
  { path:'buynavbar',component:BuyerNavbarComponent },
  { path:'buyers',component:BuyersComponent },
  { path:'adminlogin',  component: LoginComponent },

  { path:'**', component:NotFoundComponent },
 
 
];

//2. register routes
@NgModule({
  imports: [RouterModule.forRoot(routes), ProductRoutingModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
