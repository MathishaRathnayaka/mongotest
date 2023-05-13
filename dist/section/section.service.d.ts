import { section } from './schemas/section.schema';
import * as mongoose from 'mongoose';
export declare class sectionService {
    private sectionModel;
    constructor(sectionModel: mongoose.Model<section>);
    findALL(): Promise<section[]>;
    create(section: section): Promise<section>;
    updateById(id: string, section: section): Promise<section>;
    deleteById(id: string): Promise<section>;
}
