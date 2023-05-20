import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationComponent } from './components/notification/notification.component';
@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent,
    FooterComponent,
    NotificationComponent
  
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports:[
    ColumnOneComponent,
    NotificationComponent
    

  ]
})
export class SharedModule { }
