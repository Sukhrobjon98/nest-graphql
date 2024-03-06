import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;
  @Column({ type: 'varchar', length: 100 })
  @Field()
  name: string;
  @Column({
    type: 'int',
    nullable: true,
    default: 0,
  })
  @Field()
  age?: number;

  @OneToMany(() => Post, (post) => post.owner)
  @Field(() => [Post],{nullable:true})
  posts?: Post[];
}
