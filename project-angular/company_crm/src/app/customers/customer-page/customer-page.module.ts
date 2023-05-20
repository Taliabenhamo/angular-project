import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterLink } from '@angular/router';
import { CustomerPageComponent } from './customer-page.component';
import { UpdatePageComponent } from '../update-page/update-page.component';
import { DetailsPageComponent } from '../details-page/details-page.component';

@NgModule({
  declarations: [
    UpdatePageComponent,
    CustomerPageComponent,
    DetailsPageComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    RouterLink
  ]
})
export class CustomerPageModule { }
