"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const leaflet_1 = require("leaflet");
const wkx = tslib_1.__importStar(require("wkx"));
let ActivityController = class ActivityController {
    constructor(activityRepository) {
        this.activityRepository = activityRepository;
    }
    async create(activity) {
        return await this.activityRepository.create({
            ip: activity.properties.ip,
            name: activity.properties.name,
            activityTypeId: activity.properties.activityTypeId,
            time: new Date().toString(),
            geometry: wkx.Geometry.parseGeoJSON(activity.geometry).toWkt(),
            // ST_GeomFromText(geometry)
            photo: undefined,
            duration: activity.properties.duration,
            distance: activity.properties.distance
        });
        // to(geojson: Geometry) {
        //   return wkx.Geometry.parseGeoJSON(geojson).toWkt();
        // } 
        // from(wkb: any) {
        //   return wkx.Geometry.parse(new Buffer(wkb, "hex")).toGeoJSON();
        // }
    }
    async findById(id, filter) {
        return this.activityRepository.findById(id, filter);
    }
    async find(filter) {
        return this.activityRepository.find(filter);
    }
};
tslib_1.__decorate([
    rest_1.post('/activities', {
        responses: {
            '200': {
                description: 'Activity model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(leaflet_1.GeoJSON) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(leaflet_1.GeoJSON, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [leaflet_1.GeoJSON]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityController.prototype, "create", null);
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
ActivityController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ActivityRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ActivityRepository])
], ActivityController);
exports.ActivityController = ActivityController;
//# sourceMappingURL=activity.controller.js.map