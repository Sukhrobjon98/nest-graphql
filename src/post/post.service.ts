import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './Models/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput, deletePostInput } from './dto/create-post.input';

@Injectable()
export class PostService {
  createPost(post: CreatePostInput): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async deletePost(id: number): Promise<Post> {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    await this.postRepository.delete(id);

    return post;
  }
}
