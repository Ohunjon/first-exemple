import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import { DescProductComponent } from './products-page/desc-product/desc-product.component';
import {FilterPipe} from '../shared/pipes/filter.pipe';
import { MaineditComponent } from './editproduct/mainedit/mainedit.component';
import { AddproductComponent } from './editproduct/addproduct/addproduct.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    HomePageComponent,
    ProductsPageComponent,
    ContactPageComponent,
    SystemComponent,
    DescProductComponent,
    FilterPipe,
    MaineditComponent,
    AddproductComponent

  ]
})
export class SystemModule {}
