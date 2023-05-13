import { chapter } from './schemas/chapter.schema';
import * as mongoose from 'mongoose';
export declare class chapterService {
    private chapterModel;
    constructor(chapterModel: mongoose.Model<chapter>);
    findALL(): Promise<chapter[]>;
    create(chapter: chapter): Promise<chapter>;
    updateById(id: string, chapter: chapter): Promise<chapter>;
    deleteById(id: string): Promise<chapter>;
}
export declare class ChapterModule {
}
