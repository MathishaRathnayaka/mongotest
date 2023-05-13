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
exports.ChapterModule = exports.chapterService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const chapter_schema_1 = require("./schemas/chapter.schema");
const mongoose = require("mongoose");
const common_1 = require("@nestjs/common");
let chapterService = class chapterService {
    constructor(chapterModel) {
        this.chapterModel = chapterModel;
    }
    async findALL() {
        const chapter = await this.chapterModel.find();
        return chapter;
    }
    async create(chapter) {
        const res = await this.chapterModel.create(chapter);
        return res;
    }
    async updateById(id, chapter) {
        return await this.chapterModel.findById(id, chapter, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id) {
        return await this.chapterModel.findByIdAndDelete(id);
    }
};
chapterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chapter_schema_1.chapter.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], chapterService);
exports.chapterService = chapterService;
class ChapterModule {
}
exports.ChapterModule = ChapterModule;
//# sourceMappingURL=chapter.service.js.map