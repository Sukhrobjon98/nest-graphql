import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './Models/post.entity';
import { ParseIntPipe } from '@nestjs/common';
import { CreatePostInput, deletePostInput } from './dto/create-post.input';

@Resolver((of) => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => [Post])
  posts(): Promise<Post[]> {
    console.log('Resolver');
    return this.postService.findAll();
  }

  @Mutation(() => Post)
  createPost(@Args('post') post: CreatePostInput): Promise<Post> {
    return this.postService.createPost(post);
  }

  @Mutation(() => Post)
  async deletePost(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    console.log('Resolver', id);
    return this.postService.deletePost(id);
  }
}
