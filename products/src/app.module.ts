import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module'
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://williandias360:acesso225533@ds137827.mlab.com:37827/nestjsapiexample',
      { useNewUrlParser: true, useUnifiedTopology: true })
  ]
})
export class AppModule { }
