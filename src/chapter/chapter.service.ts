import { InjectModel } from '@nestjs/mongoose';
import { chapter } from './schemas/chapter.schema';
import * as mongoose from 'mongoose';
import{ Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class chapterService {
    
    constructor(
        @InjectModel(chapter.name)
        private chapterModel: mongoose.Model<chapter>
    ) {}


    async findALL(): Promise<chapter[]> {
        const chapter = await this.chapterModel.find()
        return chapter;
    }
    async create(chapter: chapter): Promise<chapter>{
       const res = await this.chapterModel.create(chapter) 
       return res;
    }
    async updateById(id: string, chapter:chapter): Promise<chapter>{
        return await this.chapterModel.findById(id, chapter,{
            new: true,
            runValidators:true,
        }
            
            );
    }
    async deleteById(id: string): Promise<chapter> {
        return await this.chapterModel.findByIdAndDelete(id);
      }
    }
    export class ChapterModule {}

