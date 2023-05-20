import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { CustomerPageComponent } from './customers/customer-page/customer-page.component';
import { LoginComponent } from './auth/components/login/login.component';
import { UpdatePageComponent } from './customers/update-page/update-page.component';
import { DetailsPageComponent } from './customers/details-page/details-page.component';
import { EmployeesPageComponent } from './employees/employees-page/employees-page.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerPageComponent },
  { path: 'update/:id', component: UpdatePageComponent },
  { path: 'employees', component: EmployeesPageComponent },
  { path: 'details/:id', component: DetailsPageComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
