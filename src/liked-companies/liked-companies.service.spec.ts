import { Test, TestingModule } from '@nestjs/testing';
import { LikedCompaniesService } from './liked-companies.service';

describe('LikedCompaniesService', () => {
  let service: LikedCompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikedCompaniesService],
    }).compile();

    service = module.get<LikedCompaniesService>(LikedCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
