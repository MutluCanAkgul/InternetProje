import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './nav/header/header.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ResepsionComponent } from './movies/resepsion.component';


@NgModule({
  declarations: [HomeComponent,ResepsionComponent, HeaderComponent, ContactComponent,],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports :[HomeComponent,ResepsionComponent,HeaderComponent,ContactComponent,]
})
export class CustomerModule { }
