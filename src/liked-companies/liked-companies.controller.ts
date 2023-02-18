import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikedCompaniesService } from './liked-companies.service';
import { CreateLikedCompanyDto } from './dto/create-liked-company.dto';
import { UpdateLikedCompanyDto } from './dto/update-liked-company.dto';

@Controller('liked-companies')
export class LikedCompaniesController {
  constructor(private readonly likedCompaniesService: LikedCompaniesService) {}

  @Post()
  create(@Body() createLikedCompanyDto: CreateLikedCompanyDto) {
    return this.likedCompaniesService.create(createLikedCompanyDto);
  }

  @Get()
  findAll() {
    return this.likedCompaniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likedCompaniesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikedCompanyDto: UpdateLikedCompanyDto) {
    return this.likedCompaniesService.update(+id, updateLikedCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likedCompaniesService.remove(+id);
  }
}
