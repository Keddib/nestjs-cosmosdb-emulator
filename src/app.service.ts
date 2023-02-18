import { Injectable } from '@nestjs/common';
// import {} from '@nestjs/azure-database';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello() {
    console.log('db name', this.configService.get<string>('db.cosmos.name'));
    return 'hello world';
  }
}
