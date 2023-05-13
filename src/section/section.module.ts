import { Module } from '@nestjs/common';
import {SectionController}from './section.controller';
import { sectionService } from './section.service';
import { MongooseModule } from '@nestjs/mongoose';
import { sectionSchema } from './schemas/section.schema';

@Module({
    imports:[MongooseModule.forFeature([{name:'section', schema:sectionSchema}])],
    controllers:[SectionController],
    providers:[sectionService]
})
export class SectionModule {}