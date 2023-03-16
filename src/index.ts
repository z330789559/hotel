import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { Container } from "typedi";
import * as TypeORM from "typeorm";
import { buildSchema } from "type-graphql";

import { RecipeResolver } from "./resolvers/recipe-resolver";
import { RateResolver } from "./resolvers/rate-resolver";
import { Recipe } from "./entities/recipe";
import { Rate } from "./entities/rate";
import { User } from "./entities/user";
import { seedDatabase } from "./helpers";

export interface Context {
  user: User;
}

// register 3rd party IOC container
TypeORM.useContainer(Container);

async function bootstrap() {
  try {
  
    // create TypeORM connection
    await TypeORM.createConnection({
      type: "mysql",
      database: "type-graphql-basic",
      username: "postgres", // fill this with your username
      password: "qwerty", // and password
      port: 3307, // and port
      host: "127.0.0.1", // and host
      entities: [Recipe, Rate, User],
      synchronize: true,
      logger: "advanced-console",
      logging: "all",
      dropSchema: true,
      cache: true,
    });

    // seed database with some data
    const { defaultUser } = await seedDatabase();

    // build TypeGraphQL executable schema
    const schema = await buildSchema({
      resolvers: [RecipeResolver, RateResolver],
      container: Container,
    });

    // create mocked context
    const context: Context = { user: defaultUser };

    // Create GraphQL server
    const server = new ApolloServer({ schema, context });

    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  } catch (err) {
    console.error(err);
  }
}
(async function() {
await bootstrap();
  
})()
