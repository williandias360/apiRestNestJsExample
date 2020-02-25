import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ProductModel } from '../models/product.model'

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly model: Model<ProductModel>) { }

    async get(): Promise<ProductModel[]> {
        return await this.model.find().exec();
    }

    async create(model: ProductModel): Promise<ProductModel> {
        const product = new this.model(model)
        return await product.save()
    }
}