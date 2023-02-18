import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LikedCompaniesModule } from './liked-companies/liked-companies.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { MatchesModule } from './matches/matches.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configutation from './config/configutation';
import { AzureCosmosDbModule } from '@nestjs/azure-database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configutation],
    }),
    AzureCosmosDbModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dbName: configService.get<string>('db.cosmos.name') || '',
        endpoint: configService.get<string>('db.cosmos.host') || '',
        key: configService.get<string>('db.cosmos.key') || '',
      }),
    }),
    UsersModule,
    LikedCompaniesModule,
    SubscriptionsModule,
    MatchesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
