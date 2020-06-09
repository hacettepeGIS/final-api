"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GisApiApplication = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const sequence_1 = require("./sequence");
class GisApiApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        if (typeof window === 'undefined') {
            global.window = {
                screen: {
                    deviceXDPI: {}
                }
            };
            global.document = {
                documentElement: {
                    style: {}
                },
                getElementsByTagName: function () { return []; },
                createElement: function () { return {}; }
            };
            global.navigator = {
                userAgent: 'nodejs',
                platform: {
                    indexOf: function (param) { return 0; }
                }
            };
        }
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}
exports.GisApiApplication = GisApiApplication;
//# sourceMappingURL=application.js.map