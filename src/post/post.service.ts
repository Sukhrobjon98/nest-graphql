import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { OwnerService } from 'src/owner/owner.service';
import { Owner } from 'src/owner/entities/owner.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRespository: Repository<Post>,
    @Inject(forwardRef(() => OwnerService)) private ownerService: OwnerService,
  ) {}
  create(createPostInput: CreatePostInput) {
    const newPost = this.postRespository.create(createPostInput);
    return this.postRespository.save(newPost);
  }

  findAll() {
    return this.postRespository.find();
  }

  findOne(id: any): Promise<Post[]> {
    return this.postRespository.find({ where: { ownerId: id } });
  }


  async owner(post: Post): Promise<Owner> {
    return this.ownerService.getOwner(post.ownerId);
  }

}
