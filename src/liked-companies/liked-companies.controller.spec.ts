import { Test, TestingModule } from '@nestjs/testing';
import { LikedCompaniesController } from './liked-companies.controller';
import { LikedCompaniesService } from './liked-companies.service';

describe('LikedCompaniesController', () => {
  let controller: LikedCompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikedCompaniesController],
      providers: [LikedCompaniesService],
    }).compile();

    controller = module.get<LikedCompaniesController>(LikedCompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
