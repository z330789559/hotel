"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rate = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const recipe_1 = require("./recipe");
let Rate = class Rate extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Rate.prototype, "id", void 0);
tslib_1.__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int),
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], Rate.prototype, "value", void 0);
tslib_1.__decorate([
    (0, type_graphql_1.Field)(type => user_1.User),
    (0, typeorm_1.ManyToOne)(type => user_1.User),
    tslib_1.__metadata("design:type", user_1.User)
], Rate.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.RelationId)((rate) => rate.user),
    tslib_1.__metadata("design:type", Number)
], Rate.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], Rate.prototype, "date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(type => recipe_1.Recipe),
    tslib_1.__metadata("design:type", recipe_1.Recipe)
], Rate.prototype, "recipe", void 0);
tslib_1.__decorate([
    (0, typeorm_1.RelationId)((rate) => rate.recipe),
    tslib_1.__metadata("design:type", Number)
], Rate.prototype, "recipeId", void 0);
Rate = tslib_1.__decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Rate);
exports.Rate = Rate;
