import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UsersService} from './shared/services/users.service';
import {AuthService} from './shared/services/auth.service';
import {HomeService} from './shared/services/home.service';
import {ProductsService} from './shared/services/products.service';
import {AuthGuard} from './shared/services/auth.guard';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [UsersService, AuthService, HomeService, ProductsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
