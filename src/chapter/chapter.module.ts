import { Module } from '@nestjs/common';
import { chapterController } from './chapter.controller';
import { chapterService } from './chapter.service';
import { chapterSchema } from './schemas/chapter.schema';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'chapter', schema: chapterSchema }])],
  controllers: [chapterController],
  providers: [chapterService]
})
export class ChapterModule {}
