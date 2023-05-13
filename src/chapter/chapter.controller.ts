import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { chapter } from "./schemas/chapter.schema";
import { CreatechapterDto } from "./dto/create-chapter.dto";
import { UpdatechapterDto } from "./dto/update-chapter.dto";
import { chapterService } from "./chapter.service";

@Controller('chapter')
export class chapterController {
    constructor(private chapterService:chapterService)  {}

    @Get ()
    async getALLchapter(): Promise<chapter[]> {
        return this.chapterService.findALL();
    }
    
    @Post()
    async createchapter(
        @Body()
        chapter: CreatechapterDto
    ): Promise<chapter>{
        return this.chapterService.create(chapter)
    }
    // @Get (':id')
    // async getchapter(
    //     @Param('id')
    //     id:string
    // ): Promise<chapter> {
    //     return this.chapterService.findById(id);
    // }
    @Put(':id')
    async updatechapter( @Param('id')
        id:string,
        @Body()
        chapter: UpdatechapterDto,
    ): Promise<chapter>{
        return this.chapterService.updateById(id,chapter);
    }
    @Delete (':id')
    async deletechapter(
        @Param('id')
        id:string
    ): Promise<chapter> {
        return this.chapterService.deleteById(id);
    }

}
