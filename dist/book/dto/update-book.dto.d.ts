import { category } from "../schemas/book.schema";
export declare class UpdateBookDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly cateo: number;
    readonly category: category;
}
