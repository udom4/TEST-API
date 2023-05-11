import {
  Controller,
  Body,
  Post,
  UseGuards,
  Request,
  Get,
  Param,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { AuthGuard } from '@nestjs/passport';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createProduct(@Body() product: ProductDto) {
    return await this.productsService.create(product);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllProducts() {
    return await this.productsService.getAllProducts();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  async getOneProducts(@Param('id') req) {
    return (await this.productsService.getOneProducts(req)) || {};
  }
}
