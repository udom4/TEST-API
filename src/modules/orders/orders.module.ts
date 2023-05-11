import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ordersProviders } from './orders.providers';
import { ordersProductsProviders } from './ordersProducts.providers';

@Module({
  providers: [OrdersService, ...ordersProviders, ...ordersProductsProviders],
  controllers: [OrdersController],
})
export class OrdersModule {}
