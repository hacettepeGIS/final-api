"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HerokudbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'herokudb',
    connector: 'postgresql',
    url: 'postgres://jfzzhlegrkqydc:cb7c8706c2ced94161429ca3caf5af4c1ab79543f14af695274527a96b8dc710@ec2-46-137-177-160.eu-west-1.compute.amazonaws.com:5432/d7095vhe5p2hep',
    host: 'ec2-46-137-177-160.eu-west-1.compute.amazonaws.com',
    port: 5432,
    user: 'jfzzhlegrkqydc',
    password: 'cb7c8706c2ced94161429ca3caf5af4c1ab79543f14af695274527a96b8dc710',
    database: 'd7095vhe5p2hep'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let HerokudbDataSource = class HerokudbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
HerokudbDataSource.dataSourceName = 'herokudb';
HerokudbDataSource.defaultConfig = config;
HerokudbDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.herokudb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], HerokudbDataSource);
exports.HerokudbDataSource = HerokudbDataSource;
//# sourceMappingURL=herokudb.datasource.js.map