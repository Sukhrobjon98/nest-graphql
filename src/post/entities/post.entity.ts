import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
@ObjectType()
export class Post {
 @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  content: string;

  @ManyToOne(() => Owner, (owner) => owner.posts)
  @Field(() => Owner)
  owner: Owner;


  @Column()
  @Field(() => Int)
  ownerId: number;


}
