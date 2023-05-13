import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { section } from "./schemas/section.schema";
import { CreatesectionDto } from "./dto/create-section.dto";
import { UpdatesectionDto } from "./dto/update-section.dto";
import { sectionService } from "./section.service";

@Controller('section')
export class SectionController {
    constructor(private sectionService:sectionService)  {}

    @Get ()
    async getALLsection(): Promise<section[]> {
        return this.sectionService.findALL();
    }
    
    @Post()
    async createsection(
        @Body()
        section: section
    ): Promise<section>{
        return this.sectionService.create(section)
    }
    // @Get (':id')
    // async getsection(
    //     @Param('id')
    //     id:string
    // ): Promise<section> {
    //     return this.sectionService.findById(id);
    // }
    @Put(':id')
    async updatesection( @Param('id')
        id:string,
        @Body()
        section: UpdatesectionDto,
    ): Promise<section>{

        return this.sectionService.updateById(id,section);
    }
    @Delete (':id')
    async deletesection(
        @Param('id')
        id:string
    ): Promise<section> {
        return this.sectionService.deleteById(id);
    }

}
