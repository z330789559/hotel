"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const typedi_1 = require("typedi");
const TypeORM = tslib_1.__importStar(require("typeorm"));
const type_graphql_1 = require("type-graphql");
const recipe_resolver_1 = require("./resolvers/recipe-resolver");
const rate_resolver_1 = require("./resolvers/rate-resolver");
const recipe_1 = require("./entities/recipe");
const rate_1 = require("./entities/rate");
const user_1 = require("./entities/user");
const helpers_1 = require("./helpers");
// register 3rd party IOC container
TypeORM.useContainer(typedi_1.Container);
async function bootstrap() {
    try {
        // create TypeORM connection
        await TypeORM.createConnection({
            type: "mysql",
            database: "type-graphql-basic",
            username: "postgres",
            password: "qwerty",
            port: 3307,
            host: "127.0.0.1",
            entities: [recipe_1.Recipe, rate_1.Rate, user_1.User],
            synchronize: true,
            logger: "advanced-console",
            logging: "all",
            dropSchema: true,
            cache: true,
        });
        // seed database with some data
        const { defaultUser } = await (0, helpers_1.seedDatabase)();
        // build TypeGraphQL executable schema
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [recipe_resolver_1.RecipeResolver, rate_resolver_1.RateResolver],
            container: typedi_1.Container,
        });
        // create mocked context
        const context = { user: defaultUser };
        // Create GraphQL server
        const server = new apollo_server_1.ApolloServer({ schema, context });
        // Start the server
        const { url } = await server.listen(4000);
        console.log(`Server is running, GraphQL Playground available at ${url}`);
    }
    catch (err) {
        console.error(err);
    }
}
(async function () {
    await bootstrap();
})();
