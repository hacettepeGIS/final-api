"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ActivityController = class ActivityController {
    constructor(activityRepository) {
        this.activityRepository = activityRepository;
    }
    async create(activity) {
        return this.activityRepository.create(activity);
    }
    async count(where) {
        return this.activityRepository.count(where);
    }
    async find(filter) {
        return this.activityRepository.find(filter);
    }
    async updateAll(activity, where) {
        return this.activityRepository.updateAll(activity, where);
    }
    async findById(id, filter) {
        return this.activityRepository.findById(id, filter);
    }
    async updateById(id, activity) {
        await this.activityRepository.updateById(id, activity);
    }
    async replaceById(id, activity) {
        await this.activityRepository.replaceById(id, activity);
    }
    async deleteById(id) {
        await this.activityRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/activities', {
        responses: {
            '200': {
                description: 'Activity model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Activity) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Activity, {
                    title: 'NewActivity',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/activities/count', {
        responses: {
            '200': {
                description: 'Activity model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Activity)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/activities', {
        responses: {
            '200': {
                description: 'Array of Activity model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Activity, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Activity)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/activities', {
        responses: {
            '200': {
                description: 'Activity PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Activity, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Activity)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Activity, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/activities/{id}', {
        responses: {
            '200': {
                description: 'Activity model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Activity, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Activity, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/activities/{id}', {
        responses: {
            '204': {
                description: 'Activity PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Activity, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Activity]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/activities/{id}', {
        responses: {
            '204': {
                description: 'Activity PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Activity]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/activities/{id}', {
        responses: {
            '204': {
                description: 'Activity DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityController.prototype, "deleteById", null);
ActivityController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ActivityRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ActivityRepository])
], ActivityController);
exports.ActivityController = ActivityController;
//# sourceMappingURL=activity.controller.js.map