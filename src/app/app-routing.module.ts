import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './m-pages/home/home.component';
import { ContactComponent } from './m-pages/contact/contact.component';
import { LoginComponent } from './register-login/login/login.component';
import { RegisterComponent } from './register-login/register/register.component';
import { Salon1Component } from './salonlar/salon1/salon1.component';
import { Salon2Component } from './salonlar/salon2/salon2.component';
import { Salon3Component } from './salonlar/salon3/salon3.component';
import { ResepsionComponent } from './m-pages/movies/resepsion.component';
import { Salon2v2Component } from './salonlar/salon2v2/salon2v2.component';
import { Salon3v3Component } from './salonlar/salon3v3/salon3v3.component';

const routes: Routes = [
{path: '',redirectTo:'anasayfa',pathMatch:"full"},
{ path:'anasayfa',component:HomeComponent },
{ path:'filmler',component:ResepsionComponent },
{ path :'iletisim',component:ContactComponent},
{ path :'giris',component:LoginComponent},
{ path:'kayit',component:RegisterComponent},
{ path:'salon1',component:Salon1Component},
{ path:'salon2_1',component:Salon2Component},
{ path:'salon2_2',component:Salon2v2Component},
{ path:'salon3_1',component:Salon3Component},
{ path:'salon3_2',component:Salon3v3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
