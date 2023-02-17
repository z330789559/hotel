


import { Field, ID, ObjectType } from 'type-graphql'
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, RelationId } from "typeorm";
import { Rate } from "./rate";

@ObjectType()
export class Recipe {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];

  @Field()
  authorId: number

  @Field()
  ratings: Rate[]
}