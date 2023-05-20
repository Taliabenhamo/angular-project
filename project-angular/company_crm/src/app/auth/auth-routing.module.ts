import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CustomerPageComponent } from '../customers/customer-page/customer-page.component';
import { DetailsPageComponent } from '../customers/details-page/details-page.component';
import { UpdatePageComponent } from '../customers/update-page/update-page.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'customer', component: CustomerPageComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: 'update', component: UpdatePageComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
