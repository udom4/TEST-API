import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { OrderProduct } from './orderProduct.entity';

@Table
export class Order extends Model<Order> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userID: number;

  @Column({
    type: DataType.ENUM('pending', 'cancel', 'success'),
    allowNull: false,
  })
  status: string;

  @HasMany(() => OrderProduct)
  productInOrder: OrderProduct[];
}
