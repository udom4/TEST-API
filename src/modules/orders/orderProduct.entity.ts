import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { Order } from './order.entity';
import { Product } from '../products/product.entity';

@Table
export class OrderProduct extends Model<OrderProduct> {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderID: number;

  // @ForeignKey(() => Product)
  // @BelongsTo(() => Product)
  @HasOne(() => Product, 'id')
  product: Product;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productID: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;
}
