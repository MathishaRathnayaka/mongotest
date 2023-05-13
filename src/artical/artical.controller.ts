import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { artical } from "./schemas/artical.schema";
import { CreatearticalDto } from "./dto/create-artical.dto";
import { UpdatearticalDto } from "./dto/update-artical.dto";
import { articalService } from "./artical.service";

@Controller('artical')
export class articalController {
    constructor(private articalService:articalService)  {}

    @Get ()
    async getALLartical(): Promise<artical[]> {
        return this.articalService.findALL();
    }
    
    @Post()
    async createartical(
        @Body()
        artical: CreatearticalDto
    ): Promise<artical>{
        return this.articalService.create(artical)
    }
    // @Get (':id')
    // async getartical(
    //     @Param('id')
    //     id:string
    // ): Promise<artical> {
    //     return this.articalService.findById(id);
    // }
    @Put(':id')
    async updateartical( @Param('id')
        id:string,
        @Body()
        artical: UpdatearticalDto,
    ): Promise<artical>{
        return this.articalService.updateById(id , artical);
    }
    @Delete (':id')
    async deleteartical(
        @Param('id')
        id:string
    ): Promise<artical> {
        return this.articalService.deleteById(id);
    }

}
