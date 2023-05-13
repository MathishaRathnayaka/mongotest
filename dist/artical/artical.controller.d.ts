import { artical } from "./schemas/artical.schema";
import { CreatearticalDto } from "./dto/create-artical.dto";
import { UpdatearticalDto } from "./dto/update-artical.dto";
import { articalService } from "./artical.service";
export declare class articalController {
    private articalService;
    constructor(articalService: articalService);
    getALLartical(): Promise<artical[]>;
    createartical(artical: CreatearticalDto): Promise<artical>;
    updateartical(id: string, artical: UpdatearticalDto): Promise<artical>;
    deleteartical(id: string): Promise<artical>;
}
