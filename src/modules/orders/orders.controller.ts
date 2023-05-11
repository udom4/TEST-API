import {
  Request,
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Request() req, @Body() order: OrderDto) {
    return await this.ordersService.create(order);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get/:id')
  async getOrder(@Param() req: any) {
    return (await this.ordersService.getOrder(req.id)) || {};
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('set/:id')
  async setStatus(@Param() id, @Body() req) {
    return (await this.ordersService.setStatus(id.id, req.status)) || {};
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/users')
  async getUsersOrders(@Request() req) {
    return (await this.ordersService.getUsersOrders(req.user.id)) || {};
  }
}
