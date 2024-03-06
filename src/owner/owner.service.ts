import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { PostService } from 'src/post/post.service';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
    @Inject(forwardRef(() => PostService))
    private postService: PostService, 
  ) {

  }
  async create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    const newOwner = this.ownerRepository.create(createOwnerInput);
    return this.ownerRepository.save(newOwner);
  }
  async findById(id: number): Promise<Owner> {
    return this.ownerRepository.findOneBy({ id });
  }

  findAll() {
    return this.ownerRepository.find();
  }

  posts(owner: Owner) {
    return this.postService.findOne(owner.id);
  }

  getOwner(id: number): Promise<Owner> {
    return this.ownerRepository.findOneBy({ id });
  }
}
