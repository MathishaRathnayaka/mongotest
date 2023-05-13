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
exports.articalController = void 0;
const common_1 = require("@nestjs/common");
const create_artical_dto_1 = require("./dto/create-artical.dto");
const update_artical_dto_1 = require("./dto/update-artical.dto");
const artical_service_1 = require("./artical.service");
let articalController = class articalController {
    constructor(articalService) {
        this.articalService = articalService;
    }
    async getALLartical() {
        return this.articalService.findALL();
    }
    async createartical(artical) {
        return this.articalService.create(artical);
    }
    async updateartical(id, artical) {
        return this.articalService.updateById(id, artical);
    }
    async deleteartical(id) {
        return this.articalService.deleteById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], articalController.prototype, "getALLartical", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artical_dto_1.CreatearticalDto]),
    __metadata("design:returntype", Promise)
], articalController.prototype, "createartical", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_artical_dto_1.UpdatearticalDto]),
    __metadata("design:returntype", Promise)
], articalController.prototype, "updateartical", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], articalController.prototype, "deleteartical", null);
articalController = __decorate([
    (0, common_1.Controller)('artical'),
    __metadata("design:paramtypes", [artical_service_1.articalService])
], articalController);
exports.articalController = articalController;
//# sourceMappingURL=artical.controller.js.map