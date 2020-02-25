import { Get, Controller, Post, Body } from '@nestjs/common'
import { ProductModel } from '../models/product.model'
import { ProductService } from '../services/product.service'

@Controller('v1/products')
export class ProductsController {
    constructor(private readonly service: ProductService) { }

    @Post()
    async create(@Body() model: ProductModel) {
        this.service.create(model);
    }

    @Get()
    async get(): Promise<ProductModel[]> {
        return this.service.get();
    }
}