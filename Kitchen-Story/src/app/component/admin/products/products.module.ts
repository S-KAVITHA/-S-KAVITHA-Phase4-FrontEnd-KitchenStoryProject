import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ProductService } from 'src/app/service/product.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[ProductService]
})
export class ProductsModule { }
