import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {Router} from '@angular/router';
import {User} from '../../shared/models/user.model';


@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  est: true;


  constructor(private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }


  onSubmit() {
    /* console.log(this.checkmail());*/
    const {name, phone, email, password} = this.form.value;
    // console.log(this.form.value);
    const user = new User(name, email, password, phone);
    this.usersService.regUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true
          }
        });

      });
  }


  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({forbiddenEmail: true});
          } else {
            resolve(null);
          }
        });
    });
  }


}
