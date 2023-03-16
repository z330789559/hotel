"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateResolver = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const rate_1 = require("../entities/rate");
const user_1 = require("../entities/user");
const typedi_1 = require("typedi");
let RateResolver = class RateResolver {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async user(rate) {
        return (await this.userRepository.findOne({ where: { id: rate.userId }, cache: 1000 }));
    }
};
tslib_1.__decorate([
    (0, type_graphql_1.FieldResolver)(),
    tslib_1.__param(0, (0, type_graphql_1.Root)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [rate_1.Rate]),
    tslib_1.__metadata("design:returntype", Promise)
], RateResolver.prototype, "user", null);
RateResolver = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)(of => rate_1.Rate),
    tslib_1.__param(0, (0, typeorm_typedi_extensions_1.InjectRepository)(user_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository])
], RateResolver);
exports.RateResolver = RateResolver;
