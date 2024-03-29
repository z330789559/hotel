import "reflect-metadata";
import { Field, ID, ObjectType } from "type-graphql";
import { PrimaryGeneratedColumn, Column, Entity ,BaseEntity} from "typeorm";

@ObjectType()
@Entity()
export class User   extends BaseEntity{
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  nickname?: string;

  @Column()
  password: string;
}