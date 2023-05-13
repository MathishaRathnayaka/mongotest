"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articalService = void 0;
const artical_schema_1 = require("./schemas/artical.schema");
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
let articalService = class articalService {
    constructor(articalModel) {
        this.articalModel = articalModel;
    }
    async findALL() {
        const artical = await this.articalModel.find();
        return artical;
    }
    async create(artical) {
        const res = await this.articalModel.create(artical);
        return res;
    }
    async updateById(id, book) {
        return await this.articalModel.findById(id, artical_schema_1.artical, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id) {
        return await this.articalModel.findByIdAndDelete(id);
    }
};
articalService = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(artical_schema_1.artical.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], articalService);
exports.articalService = articalService;
//# sourceMappingURL=artical.service.js.map