import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule } from '@angular/router';

const routes =[
  { path:'products', component:ProductsComponent},
  { path:'create', component:CreateComponent},
  { path:'update', component:UpdateComponent},
 ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
