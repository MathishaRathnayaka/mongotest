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
exports.SectionController = void 0;
const common_1 = require("@nestjs/common");
const section_schema_1 = require("./schemas/section.schema");
const update_section_dto_1 = require("./dto/update-section.dto");
const section_service_1 = require("./section.service");
let SectionController = class SectionController {
    constructor(sectionService) {
        this.sectionService = sectionService;
    }
    async getALLsection() {
        return this.sectionService.findALL();
    }
    async createsection(section) {
        return this.sectionService.create(section);
    }
    async updatesection(id, section) {
        return this.sectionService.updateById(id, section);
    }
    async deletesection(id) {
        return this.sectionService.deleteById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "getALLsection", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [section_schema_1.section]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "createsection", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_section_dto_1.UpdatesectionDto]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "updatesection", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "deletesection", null);
SectionController = __decorate([
    (0, common_1.Controller)('section'),
    __metadata("design:paramtypes", [section_service_1.sectionService])
], SectionController);
exports.SectionController = SectionController;
//# sourceMappingURL=section.controller.js.map