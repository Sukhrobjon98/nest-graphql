import { Module, forwardRef } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { PostModule } from 'src/post/post.module';

@Module({
  providers: [OwnerResolver, OwnerService],
  imports: [TypeOrmModule.forFeature([Owner]),forwardRef(() => PostModule)],
  exports: [OwnerService],
})
export class OwnerModule {}
