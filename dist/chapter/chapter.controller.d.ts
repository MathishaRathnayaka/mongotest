import { chapter } from "./schemas/chapter.schema";
import { CreatechapterDto } from "./dto/create-chapter.dto";
import { UpdatechapterDto } from "./dto/update-chapter.dto";
import { chapterService } from "./chapter.service";
export declare class chapterController {
    private chapterService;
    constructor(chapterService: chapterService);
    getALLchapter(): Promise<chapter[]>;
    createchapter(chapter: CreatechapterDto): Promise<chapter>;
    updatechapter(id: string, chapter: UpdatechapterDto): Promise<chapter>;
    deletechapter(id: string): Promise<chapter>;
}
