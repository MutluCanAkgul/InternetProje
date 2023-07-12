import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './m-pages/customer.module';
import { LoginModule } from './register-login/login.module';
import { RegisterModule } from './register-login/register.module';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    LoginModule,
    RegisterModule,
    HttpClientModule
    
  ],exports:[
  LoginModule,
  RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
