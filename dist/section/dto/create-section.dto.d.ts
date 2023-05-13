import { category } from "../schemas/section.schema";
export declare class CreatesectionDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly cateo: number;
    readonly category: category;
}
