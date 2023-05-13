import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {section } from './schemas/section.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class sectionService {
    
    constructor(
        @InjectModel(section.name)
        private sectionModel: mongoose.Model<section>
    ) {}


    async findALL(): Promise<section[]> {
        const section = await this.sectionModel.find()
        return section;
    }
    async create(section: section): Promise<section>{
       const res = await this.sectionModel.create(section) 
       return res;
    }
    async updateById(id: string, section:section): Promise<section>{
        return await this.sectionModel.findById(id, section,{
            new: true,
            runValidators:true,
        }
            
            );
    }
    async deleteById(id: string): Promise<section> {
        return await this.sectionModel.findByIdAndDelete(id);
      }
    }