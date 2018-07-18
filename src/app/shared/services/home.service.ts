import {Injectable} from '@angular/core';
import {BaseApi} from '../core/base-api';
import {Http} from '@angular/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs/Observable';
import {Home} from '../models/home.model';

@Injectable()
export class HomeService extends BaseApi{

  constructor(public http: Http){
    super (http);
  }

  getHomeArticle(): Observable<Home>{
    return this.get(`home`).map((home: Home[])=>home[0] ? home[0] :undefined);
  }
}

