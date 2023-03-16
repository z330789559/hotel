"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const rate_1 = require("./rate");
const user_1 = require("./user");
let Recipe = class Recipe extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Recipe.prototype, "id", void 0);
tslib_1.__decorate([
    (0, type_graphql_1.Field)(type => String),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Recipe.prototype, "title", void 0);
tslib_1.__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Recipe.prototype, "description", void 0);
tslib_1.__decorate([
    (0, type_graphql_1.Field)(type => [rate_1.Rate]),
    (0, typeorm_1.OneToMany)(type => rate_1.Rate, rate => rate.recipe, { cascade: ["insert"] }),
    tslib_1.__metadata("design:type", Array)
], Recipe.prototype, "ratings", void 0);
tslib_1.__decorate([
    (0, type_graphql_1.Field)(type => user_1.User),
    (0, typeorm_1.ManyToOne)(type => user_1.User),
    tslib_1.__metadata("design:type", user_1.User)
], Recipe.prototype, "author", void 0);
tslib_1.__decorate([
    (0, typeorm_1.RelationId)((recipe) => recipe.author),
    tslib_1.__metadata("design:type", Number)
], Recipe.prototype, "authorId", void 0);
Recipe = tslib_1.__decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Recipe);
exports.Recipe = Recipe;
