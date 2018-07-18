import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component ({
  selector: 'wfm-system',
  templateUrl: './system.component.html'
})
export class SystemComponent implements OnInit{

constructor (private authService: AuthService,private router: Router) {}
  user: User;

  ngOnInit(){
  this.user= JSON.parse(window.localStorage.getItem('user'));
                      }

  OnLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
