import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
import { Post } from 'src/post/entities/post.entity';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Mutation(() => Owner)
  createOwner(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput) {
    return this.ownerService.create(createOwnerInput);
  }
  @Query(() => Owner)
  findOneOwner(@Args('id', { type: () => Int }) id: number) {
    return this.ownerService.findById(id);
  }
  @ResolveField(() => [Post])
  posts(@Parent() owner: Owner) {
    return this.ownerService.posts(owner);
  }

  @Query(() => [Owner], { name: 'owners' })
  findAll() {
    return this.ownerService.findAll();
  }
}
