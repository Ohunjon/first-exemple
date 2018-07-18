import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ProductsPageComponent} from './products-page/products-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {DescProductComponent} from './products-page/desc-product/desc-product.component';
import {MaineditComponent} from './editproduct/mainedit/mainedit.component';
import {AddproductComponent} from './editproduct/addproduct/addproduct.component';
import {AuthGuard} from '../shared/services/auth.guard';


const routes: Routes = [
  {path: '', component: SystemComponent, canActivate : [AuthGuard], children:
      [
      {path: 'home', component: HomePageComponent},
      {path: 'products', component: ProductsPageComponent},
      {path: 'contact', component: ContactPageComponent},
      {path: 'products/:id', component: DescProductComponent},
        {path: 'edit', component: MaineditComponent},
        {path: 'add', component: AddproductComponent},
        {path: 'edit/:id', component: AddproductComponent}
      ]
  }
];
/*
canActivate: [AuthGuard],
*/

@NgModule ({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
