import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { ArticalModule } from './artical/artical.module';
import { SectionModule } from './section/section.module';
import { ChapterModule } from './chapter/chapter.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mathisha1234:8yd8wkEbBDsnT0GP@mathisha.fvgwjpi.mongodb.net/?retryWrites=true&w=majority'), BookModule, ArticalModule, SectionModule, ChapterModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
