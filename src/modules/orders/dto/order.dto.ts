import { OrderProductDto } from './orderProduct.dto';

export class OrderDto {
  userID: number;
  status: string;
  orderProduct!: OrderProductDto[];
}
