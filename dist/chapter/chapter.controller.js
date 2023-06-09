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
exports.chapterController = void 0;
const common_1 = require("@nestjs/common");
const create_chapter_dto_1 = require("./dto/create-chapter.dto");
const update_chapter_dto_1 = require("./dto/update-chapter.dto");
const chapter_service_1 = require("./chapter.service");
let chapterController = class chapterController {
    constructor(chapterService) {
        this.chapterService = chapterService;
    }
    async getALLchapter() {
        return this.chapterService.findALL();
    }
    async createchapter(chapter) {
        return this.chapterService.create(chapter);
    }
    async updatechapter(id, chapter) {
        return this.chapterService.updateById(id, chapter);
    }
    async deletechapter(id) {
        return this.chapterService.deleteById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], chapterController.prototype, "getALLchapter", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chapter_dto_1.CreatechapterDto]),
    __metadata("design:returntype", Promise)
], chapterController.prototype, "createchapter", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_chapter_dto_1.UpdatechapterDto]),
    __metadata("design:returntype", Promise)
], chapterController.prototype, "updatechapter", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], chapterController.prototype, "deletechapter", null);
chapterController = __decorate([
    (0, common_1.Controller)('chapter'),
    __metadata("design:paramtypes", [chapter_service_1.chapterService])
], chapterController);
exports.chapterController = chapterController;
//# sourceMappingURL=chapter.controller.js.map