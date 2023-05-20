import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from './components/field-error/field-error.component';

@NgModule({
  declarations: [LoginComponent,RegisterComponent,ResetPasswordComponent, FieldErrorComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule


    
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    FieldErrorComponent

  ]
})
export class AuthModule { }
