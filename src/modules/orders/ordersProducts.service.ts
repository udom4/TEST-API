import { Inject, Injectable } from '@nestjs/common';
import { OrderProduct } from './orderProduct.entity';
import { ORDERPRODUCT_REPOSITORY } from '../../core/constants';
import { OrderProductDto } from './dto/orderProduct.dto';

@Injectable()
export class OrdersProductsService {
  constructor(
    @Inject(ORDERPRODUCT_REPOSITORY)
    private readonly orderProductRepository: typeof OrderProduct,
  ) {}
  async create(orderProduct: OrderProductDto): Promise<OrderProduct> {
    return await this.orderProductRepository.create<OrderProduct>(orderProduct);
  }
}
