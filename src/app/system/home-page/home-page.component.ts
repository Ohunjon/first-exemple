import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../shared/services/users.service';
import {HomeService} from '../../shared/services/home.service';
import {Home} from '../../shared/models/home.model';

@Component({
  selector: 'wfm-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title: string;
  home: any;
  constructor(private homeService: HomeService) {
    this.title = '<b>About our company</b><br />';
  }

  ngOnInit() {
    this.homeService.getHomeArticle()
      .subscribe((home: Home)=>{
        this.home=home;
        //console.log(this.home=home);

      });
  }

}
