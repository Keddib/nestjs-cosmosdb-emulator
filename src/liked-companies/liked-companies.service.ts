import { Injectable } from '@nestjs/common';
import { CreateLikedCompanyDto } from './dto/create-liked-company.dto';
import { UpdateLikedCompanyDto } from './dto/update-liked-company.dto';

@Injectable()
export class LikedCompaniesService {
  create(createLikedCompanyDto: CreateLikedCompanyDto) {
    return 'This action adds a new likedCompany';
  }

  findAll() {
    return `This action returns all likedCompanies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} likedCompany`;
  }

  update(id: number, updateLikedCompanyDto: UpdateLikedCompanyDto) {
    return `This action updates a #${id} likedCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} likedCompany`;
  }
}
