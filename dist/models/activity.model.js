"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const activity_types_model_1 = require("./activity-types.model");
let Activity = class Activity extends repository_1.Entity {
    constructor(data) {
        super(data);
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
], Activity.prototype, "username", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: activity_types_model_1.ActivityTypes,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Activity.prototype, "activityTypeId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'jsonb',
        required: true,
    }),
    tslib_1.__metadata("design:type", Object)
], Activity.prototype, "location", void 0);
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