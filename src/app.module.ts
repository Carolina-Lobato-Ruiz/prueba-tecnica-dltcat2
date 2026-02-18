import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';

@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRoot(DataSourceConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
