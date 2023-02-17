"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var apollo_server_1 = require("apollo-server");
var typedi_1 = require("typedi");
var TypeORM = __importStar(require("typeorm"));
var type_graphql_1 = require("type-graphql");
var recipe_resolver_1 = require("./resolvers/recipe-resolver");
var rate_resolver_1 = require("./resolvers/rate-resolver");
var recipe_1 = require("./entities/recipe");
var rate_1 = require("./entities/rate");
var user_1 = require("./entities/user");
var helpers_1 = require("./helpers");
// register 3rd party IOC container
TypeORM.useContainer(typedi_1.Container);
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var defaultUser, schema, context, server, url, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    // create TypeORM connection
                    return [4 /*yield*/, TypeORM.createConnection({
                            type: "postgres",
                            database: "type-graphql-basic",
                            username: "postgres",
                            password: "qwerty",
                            port: 5434,
                            host: "localhost",
                            entities: [recipe_1.Recipe, rate_1.Rate, user_1.User],
                            synchronize: true,
                            logger: "advanced-console",
                            logging: "all",
                            dropSchema: true,
                            cache: true,
                        })];
                case 1:
                    // create TypeORM connection
                    _a.sent();
                    return [4 /*yield*/, (0, helpers_1.seedDatabase)()];
                case 2:
                    defaultUser = (_a.sent()).defaultUser;
                    return [4 /*yield*/, (0, type_graphql_1.buildSchema)({
                            resolvers: [recipe_resolver_1.RecipeResolver, rate_resolver_1.RateResolver],
                            container: typedi_1.Container,
                        })];
                case 3:
                    schema = _a.sent();
                    context = { user: defaultUser };
                    server = new apollo_server_1.ApolloServer({ schema: schema, context: context });
                    return [4 /*yield*/, server.listen(4000)];
                case 4:
                    url = (_a.sent()).url;
                    console.log("Server is running, GraphQL Playground available at ".concat(url));
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bootstrap()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
