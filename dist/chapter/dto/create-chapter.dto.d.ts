import { category } from "../schemas/chapter.schema";
export declare class CreatechapterDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly cateo: number;
    readonly category: category;
}
