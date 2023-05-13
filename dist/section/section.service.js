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
exports.sectionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const section_schema_1 = require("./schemas/section.schema");
const mongoose = require("mongoose");
let sectionService = class sectionService {
    constructor(sectionModel) {
        this.sectionModel = sectionModel;
    }
    async findALL() {
        const section = await this.sectionModel.find();
        return section;
    }
    async create(section) {
        const res = await this.sectionModel.create(section);
        return res;
    }
    async updateById(id, section) {
        return await this.sectionModel.findById(id, section, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id) {
        return await this.sectionModel.findByIdAndDelete(id);
    }
};
sectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(section_schema_1.section.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], sectionService);
exports.sectionService = sectionService;
//# sourceMappingURL=section.service.js.map