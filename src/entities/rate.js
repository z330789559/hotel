"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Rate = void 0;
var type_graphql_1 = require("type-graphql");
var typeorm_1 = require("typeorm");
var user_1 = require("./user");
var recipe_1 = require("./recipe");
var Rate = /** @class */ (function () {
    function Rate() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Rate.prototype, "id");
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return type_graphql_1.Int; }),
        (0, typeorm_1.Column)({ type: "int" })
    ], Rate.prototype, "value");
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return user_1.User; }),
        (0, typeorm_1.ManyToOne)(function (type) { return user_1.User; })
    ], Rate.prototype, "user");
    __decorate([
        (0, typeorm_1.RelationId)(function (rate) { return rate.user; })
    ], Rate.prototype, "userId");
    __decorate([
        (0, type_graphql_1.Field)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Rate.prototype, "date");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return recipe_1.Recipe; })
    ], Rate.prototype, "recipe");
    __decorate([
        (0, typeorm_1.RelationId)(function (rate) { return rate.recipe; })
    ], Rate.prototype, "recipeId");
    Rate = __decorate([
        (0, typeorm_1.Entity)(),
        (0, type_graphql_1.ObjectType)()
    ], Rate);
    return Rate;
}());
exports.Rate = Rate;
