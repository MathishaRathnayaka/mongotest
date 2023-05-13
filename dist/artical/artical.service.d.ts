import { artical } from './schemas/artical.schema';
import * as mongoose from 'mongoose';
export declare class articalService {
    private articalModel;
    constructor(articalModel: mongoose.Model<artical>);
    findALL(): Promise<artical[]>;
    create(artical: artical): Promise<artical>;
    updateById(id: string, book: artical): Promise<artical>;
    deleteById(id: string): Promise<artical>;
}
