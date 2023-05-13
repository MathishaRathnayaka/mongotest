/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare enum category {
    ADVENTURE = "Adventure",
    CALSSICS = "Classics",
    CRIME = "Crime",
    FANTASY = "Fantasy"
}
export declare class artical {
    title: string;
    description: string;
    author: string;
    price: number;
    category: category;
}
export declare const articalSchema: import("mongoose").Schema<artical, import("mongoose").Model<artical, any, any, any, import("mongoose").Document<unknown, any, artical> & Omit<artical & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, artical, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<artical>> & Omit<import("mongoose").FlatRecord<artical> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
