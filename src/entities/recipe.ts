


import "reflect-metadata";
import { Field, ID, ObjectType } from 'type-graphql'
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, RelationId ,BaseEntity} from "typeorm";

import { Rate } from "./rate";
import { User } from "./user";

@Entity()
@ObjectType()
export class Recipe extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field(type=>String)
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(type => [Rate])
  @OneToMany(type => Rate, rate => rate.recipe, { cascade: ["insert"] })
  ratings: Rate[];

  @Field(type => User)
  @ManyToOne(type => User)
  author: User;
  @RelationId((recipe: Recipe) => recipe.author)
  authorId: number;
}