"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RateInput = void 0;
var type_graphql_1 = require("type-graphql");
var RateInput = /** @class */ (function () {
    function RateInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return type_graphql_1.Int; })
    ], RateInput.prototype, "recipeId");
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return type_graphql_1.Int; })
    ], RateInput.prototype, "value");
    RateInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], RateInput);
    return RateInput;
}());
exports.RateInput = RateInput;
