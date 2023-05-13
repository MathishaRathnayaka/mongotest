import { category } from "../schemas/chapter.schema"


export class UpdatechapterDto {
    readonly title: string;
    readonly description: string;
    readonly author:string;
    readonly price:number;
    readonly cateo:number;
    readonly category:category;
}