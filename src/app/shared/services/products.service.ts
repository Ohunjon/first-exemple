import {Injectable} from '@angular/core';
import {BaseApi} from '../core/base-api';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Products} from '../models/products.model';
import {User} from '../models/user.model';

@Injectable()
export class ProductsService extends BaseApi {

  constructor (public http: Http){
    super(http);
  }
  getProducts(id_user: number): Observable <Products> {
    return this.get(`products?id_user=${id_user}`)
      .map((product: Products) => product ? product : undefined);
  }
    getProductById(id:number): Observable<Products>
    {
      return this.get(`products/${id}`);
    }



    deleteproduct(articleId: number): Observable <Products>{
    return this.http.delete(`http://localhost:3000/products/${articleId}`)
      .map((response: Response) => response.json());
    }


  addproduct (products: Products): Observable<Products>
  {
    return this.post('products', products);
  }



  upProduct (products: Products): Observable <Products> {
    return this.put(`products/${products.id}`, products);
  }
/*
  updateCategory(category: Category): Observable<Category>
  {
    return this.put(`categories/${category.id}`, category);
  }*/
}
