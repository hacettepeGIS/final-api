"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const wkx = tslib_1.__importStar(require("wkx"));
let Activity = class Activity extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
    to(geojson) {
        return wkx.Geometry.parseGeoJSON(geojson).toWkt();
    }
    from(wkb) {
        return wkx.Geometry.parse(new Buffer(wkb, "hex")).toGeoJSON();
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Activity.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Activity.prototype, "ip", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Activity.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Activity.prototype, "activityTypeId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'object',
        required: true,
    }),
    tslib_1.__metadata("design:type", Object)
], Activity.prototype, "geomerty", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Activity.prototype, "time", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'buffer',
    }),
    tslib_1.__metadata("design:type", Buffer)
], Activity.prototype, "photo", void 0);
Activity = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Activity);
exports.Activity = Activity;
//# sourceMappingURL=activity.model.js.map