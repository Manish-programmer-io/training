import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { MerchantComponent } from './components/merchant/merchant.component';
import { deactivateGuard } from './guards/deactivate.guard';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    canDeactivate:[deactivateGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[authGuard],
    
  },
  {
    path:'merchant',
    component:MerchantComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
