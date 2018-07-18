import {Component, OnInit} from '@angular/core';
import construct = Reflect.construct;
import {Router} from '@angular/router';

@Component ({
  selector: 'wfm-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit{
  constructor (private router: Router){}
  ngOnInit()
  {
    this.router.navigate(['/login']);
  }

}
