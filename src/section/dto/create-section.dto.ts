import { category } from "../schemas/section.schema"


export class CreatesectionDto {
    readonly title: string;
    readonly description: string;
    readonly author:string;
    readonly price:number;
    readonly cateo:number;
    readonly category:category;
}