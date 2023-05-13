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
export class section {
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

export const sectionSchema = SchemaFactory.createForClass(section)