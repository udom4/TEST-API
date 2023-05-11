import { Inject, Injectable } from '@nestjs/common';
import { Order } from './order.entity';
import { ORDER_REPOSITORY } from '../../core/constants';
import { OrderProduct } from './orderProduct.entity';
import { ORDERPRODUCT_REPOSITORY } from '../../core/constants';
import { OrderDto } from './dto/order.dto';
import { Product } from '../products/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ORDER_REPOSITORY) private readonly orderRepository: typeof Order,
    @Inject(ORDERPRODUCT_REPOSITORY)
    private readonly orderProductRepository: typeof OrderProduct,
  ) {}
  async create(order: OrderDto): Promise<any> {
    const orderCreated = await this.orderRepository.create<Order>(order);
    const orderID = orderCreated.id;
    for (let i = 0; i < order.orderProduct.length; i++) {
      order.orderProduct[i].orderID = orderID;
    }
    await this.orderProductRepository.bulkCreate(order.orderProduct);
    return {
      order: orderCreated,
      orderProduct: order.orderProduct,
    };
  }

  async setStatus(id: number, status: string) {
    const findOrder = await Order.findByPk(id);
    findOrder.status = status;
    await findOrder.save();
    return findOrder;
  }

  async getOrder(id: number) {
    return await this.orderRepository.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: OrderProduct,
          include: [
            {
              model: Product,
            },
          ],
        },
      ],
    });
  }

  async getUsersOrders(id: number): Promise<Order[]> {
    return await this.orderRepository.findAll<Order>({
      where: {
        userID: id,
      },
      include: [
        {
          model: OrderProduct,
          include: [
            {
              model: Product,
            },
          ],
        },
      ],
    });
  }
}
