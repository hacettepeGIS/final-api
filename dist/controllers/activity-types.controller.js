"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityTypesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ActivityTypesController = class ActivityTypesController {
    constructor(activityTypesRepository) {
        this.activityTypesRepository = activityTypesRepository;
    }
    async find(filter) {
        return this.activityTypesRepository.find(filter);
    }
};
tslib_1.__decorate([
    rest_1.get('/activity-types', {
        responses: {
            '200': {
                description: 'Array of ActivityTypes model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ActivityTypes, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ActivityTypes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityTypesController.prototype, "find", null);
ActivityTypesController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ActivityTypesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ActivityTypesRepository])
], ActivityTypesController);
exports.ActivityTypesController = ActivityTypesController;
//# sourceMappingURL=activity-types.controller.js.map