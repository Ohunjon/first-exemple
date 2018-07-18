import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(private usersService: UsersService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.message = new Message('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({text: 'Теперь вы можете зайти в систему', type: 'success'});
        }
        else if (params['accessDenied']) {
          this.showMessage({
            text: 'Для работы с системой вам нужно залогиниться', type: 'warning'
          });
        }
      });
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
		console.log(this.form);
    const formData = this.form.value;
    //console.log(formData.password);
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        //console.log(user);
        if (user) {
          if (user.password === formData.password) {
            // to do something
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/system', 'home']);
          } else {
            // to do something
            this.showMessage({
              text: 'Пароля не верный',
              type: 'danger'
            });
          }
        } else {
          this.showMessage({text: 'Такого пользователя не существует', type: 'danger'});
        }
      });
  }

}
