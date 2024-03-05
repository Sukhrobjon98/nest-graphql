import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: String })
  title: string;

  @Field(() => String)
  @Column({ type: String })
  content: string;

  @Field({ nullable: true })
  @Column({ nullable: true, type: String })
  type?: string;
}
