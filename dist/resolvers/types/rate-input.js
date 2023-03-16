"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateInput = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let RateInput = class RateInput {
};
tslib_1.__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], RateInput.prototype, "recipeId", void 0);
tslib_1.__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], RateInput.prototype, "value", void 0);
RateInput = tslib_1.__decorate([
    (0, type_graphql_1.InputType)()
], RateInput);
exports.RateInput = RateInput;
