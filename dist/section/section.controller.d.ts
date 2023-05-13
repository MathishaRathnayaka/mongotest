import { section } from "./schemas/section.schema";
import { UpdatesectionDto } from "./dto/update-section.dto";
import { sectionService } from "./section.service";
export declare class SectionController {
    private sectionService;
    constructor(sectionService: sectionService);
    getALLsection(): Promise<section[]>;
    createsection(section: section): Promise<section>;
    updatesection(id: string, section: UpdatesectionDto): Promise<section>;
    deletesection(id: string): Promise<section>;
}
