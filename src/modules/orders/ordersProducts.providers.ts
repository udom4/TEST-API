import { OrderProduct } from './orderProduct.entity';
import { ORDERPRODUCT_REPOSITORY } from '../../core/constants';

export const ordersProductsProviders = [
  {
    provide: ORDERPRODUCT_REPOSITORY,
    useValue: OrderProduct,
  },
];
