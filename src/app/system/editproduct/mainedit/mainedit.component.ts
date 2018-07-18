import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../../shared/services/products.service';
import {Products} from '../../../shared/models/products.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'wfm-mainedit',
  templateUrl: './mainedit.component.html',
  styleUrls: ['./mainedit.component.scss']
})
export class MaineditComponent implements OnInit, OnDestroy{
  products;
  sub1:Subscription;
  sub2:Subscription;
  constructor(private productservice: ProductsService) { }
  user = JSON.parse(localStorage.getItem('user'));

  ngOnInit()
  {
  this.sub1=this.productservice.getProducts(this.user.id)
    .subscribe((product: Products) => {
      this.products = product;
      //console.log(this.products);
    });
  }

  onDelete(articleId: number){
    this.sub2=this.productservice.deleteproduct(articleId)
      .subscribe((products: Products) => {
        console.log(products)
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === articleId) {
            this.products.splice(i, 1);
          }
        }
        // this.products = product;
        // console.log(this.products)
          //this.products= this.products.filter(c=>c.id !==articleId);
      });

    console.log(articleId);
  }
ngOnDestroy(){
    if(this.sub1){
      this.sub1.unsubscribe();
    }
    if(this.sub2)
    {
      this.sub2.unsubscribe();
    }
}
}
