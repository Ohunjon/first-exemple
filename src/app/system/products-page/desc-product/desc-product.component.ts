import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../../../shared/services/products.service';
import {Products} from '../../../shared/models/products.model';

@Component({
  selector: 'wfm-desc-product',
  templateUrl: './desc-product.component.html',
  styleUrls: ['./desc-product.component.scss']
})
export class DescProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productservice: ProductsService) { }
pr ;
  ngOnInit() {
    this.route.params
      .mergeMap((params: Params) => this.productservice.getProductById(params['id']))
      .subscribe((product: Products)=>
      {
        this.pr= product;
       // console.log(this.pr);
      });
  }

}
