import { category } from "../schemas/artical.schema";
export declare class UpdatearticalDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly cateo: number;
    readonly category: category;
}
