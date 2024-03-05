import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './Models/post.entity';

@Module({
  providers: [PostService, PostResolver],
  imports: [TypeOrmModule.forFeature([Post])]
})
export class PostModule {}
