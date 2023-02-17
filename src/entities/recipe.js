"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
var type_graphql_1 = require("type-graphql");
var Recipe = /** @class */ (function () {
    function Recipe() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return type_graphql_1.ID; })
    ], Recipe.prototype, "id", void 0);
    __decorate([
        (0, type_graphql_1.Field)()
    ], Recipe.prototype, "title", void 0);
    __decorate([
        (0, type_graphql_1.Field)({ nullable: true })
    ], Recipe.prototype, "description", void 0);
    __decorate([
        (0, type_graphql_1.Field)()
    ], Recipe.prototype, "creationDate", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return [String]; })
    ], Recipe.prototype, "ingredients", void 0);
    __decorate([
        (0, type_graphql_1.Field)()
    ], Recipe.prototype, "authorId", void 0);
    __decorate([
        (0, type_graphql_1.Field)()
    ], Recipe.prototype, "ratings", void 0);
    Recipe = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], Recipe);
    return Recipe;
}());
exports.Recipe = Recipe;
