import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginComponent,],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule

  ],exports:[LoginComponent,],
})
export class LoginModule { }
