import { PartialType } from '@nestjs/mapped-types';
import { CreateLikedCompanyDto } from './create-liked-company.dto';

export class UpdateLikedCompanyDto extends PartialType(CreateLikedCompanyDto) {}
