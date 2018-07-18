import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Products} from '../../../shared/models/products.model';
import {ProductsService} from '../../../shared/services/products.service';
import {Message} from '../../../shared/models/message.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'wfm-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit, OnDestroy {
  forUp = false;
  pr;
  form: FormGroup;
  added = false;
  message: Message;
  cName = '';
  cImg = '';
  cPrice = '';
  cDes = '';
  cId: number;
  s1: Subscription;
  s2: Subscription;
  s3: Subscription;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private productservice: ProductsService, private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'img': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
    });


    this.s3 = this.route.params
      .mergeMap((params: Params) => this.productservice.getProductById(params['id']))
      .subscribe((product: Products) => {
        this.pr = product;
        this.forUp = true;

        this.cName = product.name;
        this.cImg = product.img;
        this.cPrice = product.price;
        this.cDes = product.description;
        this.cId = product.id;
        // console.log(this.cId);
      });


  }

  private showMessage(message: Message) {
    this.message = message;
    setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onAdd() {
    // console.log(this.form.value);
    const {name, img, price, description} = this.form.value;

    const products = new Products(name, img, price, description, +this.user.id);
    this.s1 = this.productservice.addproduct(products)
      .subscribe(() => {
        this.added = true;
        this.showMessage({
          text: 'Ваш запис добавлено',
          type: 'success'
        });
      });
  }


  onUpdate() {
    // console.log(this.form.value);
    const {name, img, price, description} = this.form.value;

    const product = new Products(name, img, price, description, +this.user.id, this.cId);
    console.log(product);
    this.s2 = this.productservice.upProduct(product)
      .subscribe(() => {
        this.added = true;
        this.showMessage({
          text: 'Ваш запис успешно изменено',
          type: 'success'
        });
      });
  }

  ngOnDestroy() {
    if (this.s1) {
      this.s1.unsubscribe();
    }
    if (this.s2) this.s2.unsubscribe();
    if (this.s3) this.s3.unsubscribe();
  }
}
