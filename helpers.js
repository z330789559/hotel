"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = void 0;
const typeorm_1 = require("typeorm");
const recipe_1 = require("./entities/recipe");
const rate_1 = require("./entities/rate");
const user_1 = require("./entities/user");
async function seedDatabase() {
    const recipeRepository = (0, typeorm_1.getRepository)(recipe_1.Recipe);
    const ratingsRepository = (0, typeorm_1.getRepository)(rate_1.Rate);
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    const defaultUser = userRepository.create({
        email: "test@github.com",
        nickname: "MichalLytek",
        password: "s3cr3tp4ssw0rd",
    });
    await userRepository.save(defaultUser);
    const recipes = recipeRepository.create([
        {
            title: "Recipe 1",
            description: "Desc 1",
            authorId: defaultUser.id,
            ratings: ratingsRepository.create([
                { value: 2, user: defaultUser },
                { value: 4, user: defaultUser },
                { value: 5, user: defaultUser },
                { value: 3, user: defaultUser },
                { value: 4, user: defaultUser },
            ]),
        },
        {
            title: "Recipe 2",
            authorId: defaultUser.id,
            ratings: ratingsRepository.create([
                { value: 2, user: defaultUser },
                { value: 4, user: defaultUser },
            ]),
        },
    ]);
    await recipeRepository.save(recipes);
    return {
        defaultUser,
    };
}
exports.seedDatabase = seedDatabase;
