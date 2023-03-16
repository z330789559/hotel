"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.__esModule = true;
exports.RecipeResolver = void 0;
var type_graphql_1 = require("type-graphql");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var recipe_1 = require("../entities/recipe");
var rate_1 = require("../entities/rate");
var user_1 = require("../entities/user");
var RecipeResolver = /** @class */ (function () {
    function RecipeResolver(recipeRepository, ratingsRepository, userRepository) {
        this.recipeRepository = recipeRepository;
        this.ratingsRepository = ratingsRepository;
        this.userRepository = userRepository;
    }
    RecipeResolver.prototype.recipe = function (recipeId) {
        return this.recipeRepository.findOneBy({ id: recipeId.toString() });
    };
    RecipeResolver.prototype.recipes = function () {
        return this.recipeRepository.find();
    };
    RecipeResolver.prototype.addRecipe = function (recipeInput, _a) {
        var user = _a.user;
        return __awaiter(this, void 0, void 0, function () {
            var recipe;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        recipe = this.recipeRepository.create(__assign(__assign({}, recipeInput), { authorId: user.id }));
                        return [4 /*yield*/, this.recipeRepository.save(recipe)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    RecipeResolver.prototype.rate = function (rateInput, _a) {
        var user = _a.user;
        return __awaiter(this, void 0, void 0, function () {
            var recipe, newRate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.recipeRepository.findOne({
                            where: { id: rateInput.recipeId.toString() },
                            relations: ["ratings"]
                        })];
                    case 1:
                        recipe = _b.sent();
                        if (!recipe) {
                            throw new Error("Invalid recipe ID");
                        }
                        newRate = this.ratingsRepository.create({
                            recipe: recipe,
                            value: rateInput.value,
                            user: user
                        });
                        recipe.ratings.push(newRate);
                        // update the recipe
                        return [4 /*yield*/, this.recipeRepository.save(recipe)];
                    case 2:
                        // update the recipe
                        _b.sent();
                        return [2 /*return*/, recipe];
                }
            });
        });
    };
    RecipeResolver.prototype.ratings = function (recipe) {
        return this.ratingsRepository.find({
            cache: 1000,
            where: { recipe: { id: recipe.id } }
        });
    };
    RecipeResolver.prototype.author = function (recipe) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ where: { id: recipe.authorId }, cache: 1000 })];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    __decorate([
        (0, type_graphql_1.Query)(function (returns) { return recipe_1.Recipe; }, { nullable: true }),
        __param(0, (0, type_graphql_1.Arg)("recipeId", function (type) { return type_graphql_1.Int; }))
    ], RecipeResolver.prototype, "recipe");
    __decorate([
        (0, type_graphql_1.Query)(function (returns) { return [recipe_1.Recipe]; })
    ], RecipeResolver.prototype, "recipes");
    __decorate([
        (0, type_graphql_1.Mutation)(function (returns) { return recipe_1.Recipe; }),
        __param(0, (0, type_graphql_1.Arg)("recipe")),
        __param(1, (0, type_graphql_1.Ctx)())
    ], RecipeResolver.prototype, "addRecipe");
    __decorate([
        (0, type_graphql_1.Mutation)(function (returns) { return recipe_1.Recipe; }),
        __param(0, (0, type_graphql_1.Arg)("rate")),
        __param(1, (0, type_graphql_1.Ctx)())
    ], RecipeResolver.prototype, "rate");
    __decorate([
        (0, type_graphql_1.FieldResolver)(),
        __param(0, (0, type_graphql_1.Root)())
    ], RecipeResolver.prototype, "ratings");
    __decorate([
        (0, type_graphql_1.FieldResolver)(),
        __param(0, (0, type_graphql_1.Root)())
    ], RecipeResolver.prototype, "author");
    RecipeResolver = __decorate([
        (0, type_graphql_1.Resolver)(function (of) { return recipe_1.Recipe; }),
        __param(0, (0, typeorm_typedi_extensions_1.InjectRepository)(recipe_1.Recipe)),
        __param(1, (0, typeorm_typedi_extensions_1.InjectRepository)(rate_1.Rate)),
        __param(2, (0, typeorm_typedi_extensions_1.InjectRepository)(user_1.User))
    ], RecipeResolver);
    return RecipeResolver;
}());
exports.RecipeResolver = RecipeResolver;
