import { Field, InputType, Int, Union, createUnionType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;
  @Field()
  content: string;
  @Field()
  type?: string;
}

@InputType()
export class deletePostInput {
  @Field((type) => Int)
  id: number;
}
