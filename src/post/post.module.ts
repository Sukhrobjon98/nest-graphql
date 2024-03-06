import { Module, forwardRef } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { OwnerModule } from 'src/owner/owner.module';

@Module({
  providers: [PostResolver, PostService],
  imports: [TypeOrmModule.forFeature([Post]),forwardRef(() => OwnerModule)],
  exports: [PostService],
})
export class PostModule {}
