import { Injectable, Inject } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductDto } from './dto/product.dto';
import { PRODUCT_REPOSITORY } from '../../core/constants';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,
  ) {}

  async create(product: ProductDto): Promise<Product> {
    return await this.productRepository.create<Product>(product);
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAll<Product>();
  }

  async getOneProducts(id: number): Promise<Product> {
    return await this.productRepository.findByPk<Product>(id);
  }
}
