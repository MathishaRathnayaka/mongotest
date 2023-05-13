import { Module } from '@nestjs/common';
import { articalController } from './artical.controller';
import { articalService } from './artical.service';
import { MongooseModule } from '@nestjs/mongoose';
import { articalSchema } from './schemas/artical.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'section', schema:articalSchema}])],
  controllers: [articalController],
  providers: [articalService]
})
export class ArticalModule {}
