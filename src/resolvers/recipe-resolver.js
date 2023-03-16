"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolver = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const typedi_1 = require("typedi");
const recipe_1 = require("../entities/recipe");
const rate_1 = require("../entities/rate");
const user_1 = require("../entities/user");
const recipe_input_1 = require("./types/recipe-input");
const rate_input_1 = require("./types/rate-input");
let RecipeResolver = class RecipeResolver {
    constructor(recipeRepository, ratingsRepository, userRepository) {
        this.recipeRepository = recipeRepository;
        this.ratingsRepository = ratingsRepository;
        this.userRepository = userRepository;
    }
    recipe(recipeId) {
        return this.recipeRepository.findOneBy({ id: recipeId });
    }
    recipes() {
        return this.recipeRepository.find();
    }
    async addRecipe(recipeInput, { user }) {
        const recipe = this.recipeRepository.create({
            ...recipeInput,
            authorId: user.id,
        });
        return await this.recipeRepository.save(recipe);
    }
    async rate(rateInput, { user }) {
        // find the recipe
        const recipe = await this.recipeRepository.findOne({
            where: { id: rateInput.recipeId },
            relations: ["ratings"],
        });
        if (!recipe) {
            throw new Error("Invalid recipe ID");
        }
        // set the new recipe rate
        const newRate = this.ratingsRepository.create({
            recipe,
            value: rateInput.value,
            user,
        });
        recipe.ratings.push(newRate);
        // update the recipe
        await this.recipeRepository.save(recipe);
        return recipe;
    }
    ratings(recipe) {
        return this.ratingsRepository.find({
            cache: 1000,
            where: { recipe: { id: recipe.id } },
        });
    }
    async author(recipe) {
        return (await this.userRepository.findOne({ where: { id: recipe.authorId }, cache: 1000 }));
    }
};
tslib_1.__decorate([
    (0, type_graphql_1.Query)(returns => recipe_1.Recipe, { nullable: true }),
    tslib_1.__param(0, (0, type_graphql_1.Arg)("recipeId", type => type_graphql_1.Int)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeResolver.prototype, "recipe", null);
tslib_1.__decorate([
    (0, type_graphql_1.Query)(returns => [recipe_1.Recipe]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipes", null);
tslib_1.__decorate([
    (0, type_graphql_1.Mutation)(returns => recipe_1.Recipe),
    tslib_1.__param(0, (0, type_graphql_1.Arg)("recipe")),
    tslib_1.__param(1, (0, type_graphql_1.Ctx)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [recipe_input_1.RecipeInput, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeResolver.prototype, "addRecipe", null);
tslib_1.__decorate([
    (0, type_graphql_1.Mutation)(returns => recipe_1.Recipe),
    tslib_1.__param(0, (0, type_graphql_1.Arg)("rate")),
    tslib_1.__param(1, (0, type_graphql_1.Ctx)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [rate_input_1.RateInput, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeResolver.prototype, "rate", null);
tslib_1.__decorate([
    (0, type_graphql_1.FieldResolver)(),
    tslib_1.__param(0, (0, type_graphql_1.Root)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [recipe_1.Recipe]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeResolver.prototype, "ratings", null);
tslib_1.__decorate([
    (0, type_graphql_1.FieldResolver)(),
    tslib_1.__param(0, (0, type_graphql_1.Root)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [recipe_1.Recipe]),
    tslib_1.__metadata("design:returntype", Promise)
], RecipeResolver.prototype, "author", null);
RecipeResolver = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)(of => recipe_1.Recipe),
    tslib_1.__param(0, (0, typeorm_typedi_extensions_1.InjectRepository)(recipe_1.Recipe)),
    tslib_1.__param(1, (0, typeorm_typedi_extensions_1.InjectRepository)(rate_1.Rate)),
    tslib_1.__param(2, (0, typeorm_typedi_extensions_1.InjectRepository)(user_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;
