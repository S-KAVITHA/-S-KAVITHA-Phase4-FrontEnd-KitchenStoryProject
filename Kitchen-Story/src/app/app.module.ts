
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/admin/header/header.component';
import { FooterComponent } from './component/admin/footer/footer.component';
import { HomeComponent } from './component/admin/home/home.component';
import { BuyerRegisterComponent } from './component/buyers/buyerregister/buyerregister.component';
import { RegisterComponent } from './component/admin/register/register.component';
import { LoginComponent } from './component/admin/login/login.component';
import { AboutComponent } from './component/admin/about/about.component';
import { NavbarComponent } from './component/admin/navbar/navbar.component';
import { OneWayComponent } from './component/admin/data/one-way/one-way.component';
import { TwoWayComponent } from './component/admin/data/two-way/two-way.component';
import { CssBindingComponent } from './component/admin/data/css-binding/css-binding.component';
import { EventBindingComponent } from './component/admin/data/event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductsModule } from './component/admin/products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { AdminComponent } from './component/admin/admin.component';
import { BuyersComponent } from './component/buyers/buyers.component';
import { BuyerLoginComponent } from './component/buyers/buyerlogin/buyerlogin.component';
import { AuthService } from './component/admin/auth/auth.service';
import { BuyerAuthService } from './component/buyers/auth/auth.service';
import { BuyerNavbarComponent } from './component/buyers/buyernavbar/buyernavbar.component';
import { BuyProductsComponent } from './component/buyers/products/products.component';
import { CartComponent } from './component/buyers/cart/cart.component';
import { OrderComponent } from './component/buyers/order/order.component';


import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    OneWayComponent,
    TwoWayComponent,
    CssBindingComponent,
    EventBindingComponent,
    NotFoundComponent,
    AdminComponent,
    BuyersComponent,
    BuyerLoginComponent,
    BuyerNavbarComponent,
    BuyProductsComponent,
    CartComponent,
    OrderComponent,
    BuyerRegisterComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,AuthService,BuyerAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
