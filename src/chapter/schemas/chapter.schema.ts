import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum category {
    ADVENTURE = 'Adventure',
    CALSSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy'
}


@Schema({
    timestamps: true
})
export class chapter {
    @Prop()
    title:string;

    @Prop()
    description:string;

    @Prop()
    author:string;

    @Prop()
    price :number;

    @Prop()
    category: category
}

export const chapterSchema = SchemaFactory.createForClass(chapter)