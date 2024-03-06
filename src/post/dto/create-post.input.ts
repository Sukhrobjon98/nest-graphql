import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'The title of the post' })
  title: string;

  @Field(() => String, { description: 'The content of the post' })
  content: string;

  @Field(() => Int, { description: 'The author of the post' })
  ownerId: number;
}
