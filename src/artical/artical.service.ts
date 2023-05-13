import { Injectable } from '@nestjs/common';
import { artical } from './schemas/artical.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export class articalService {
    
    constructor(
        @InjectModel(artical.name)
        private articalModel: mongoose.Model<artical>
    ) {}


    async findALL(): Promise<artical[]> {
        const artical = await this.articalModel.find()
        return artical;
    }
    async create(artical: artical): Promise<artical>{
       const res = await this.articalModel.create(artical) 
       return res;
    }
    async updateById(id: string, book:artical): Promise<artical>{
        return await this.articalModel.findById(id, artical,{
            new: true,
            runValidators:true,
        }
            
            );
    }
    async deleteById(id: string): Promise<artical> {
        return await this.articalModel.findByIdAndDelete(id);
      }
    }
