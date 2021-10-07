import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderService } from '../../services/domain/order.service';
import { OrderConfirmationPage } from './order-confirmation';

@NgModule({
  declarations: [
    OrderConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderConfirmationPage),
  ],
  providers: [ 
    OrderService
  ]
})
export class OrderConfirmationPageModule {}
