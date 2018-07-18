import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';
import {Products} from '../../shared/models/products.model';

@Component({
  selector: 'wfm-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products;
  filterValue = '';
  name;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private productService: ProductsService) {
  }

  /* window.localStorage.setItem('user', JSON.stringify(user));*/


  ngOnInit() {
    this.productService.getProducts(this.user.id).subscribe((products: Products) => {
      this.products = products;
      this.name = products.name;
    });
  }


}
