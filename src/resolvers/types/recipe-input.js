"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeInput = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let RecipeInput = class RecipeInput {
};
tslib_1.__decorate([
    (0, type_graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], RecipeInput.prototype, "title", void 0);
tslib_1.__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], RecipeInput.prototype, "description", void 0);
RecipeInput = tslib_1.__decorate([
    (0, type_graphql_1.InputType)()
], RecipeInput);
exports.RecipeInput = RecipeInput;
