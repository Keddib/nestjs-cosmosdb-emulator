import { Module } from '@nestjs/common';
import { LikedCompaniesService } from './liked-companies.service';
import { LikedCompaniesController } from './liked-companies.controller';

@Module({
  controllers: [LikedCompaniesController],
  providers: [LikedCompaniesService]
})
export class LikedCompaniesModule {}
