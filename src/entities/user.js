"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var type_graphql_1 = require("type-graphql");
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function (type) { return type_graphql_1.ID; }),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "id", void 0);
    __decorate([
        (0, type_graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], User.prototype, "email", void 0);
    __decorate([
        (0, type_graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true })
    ], User.prototype, "nickname", void 0);
    __decorate([
        (0, typeorm_1.Column)()
    ], User.prototype, "password", void 0);
    User = __decorate([
        (0, type_graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}());
exports.User = User;
