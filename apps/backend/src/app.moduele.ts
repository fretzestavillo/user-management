import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './app/user.module';
import { UserEntity } from './tools/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.19.16.1',
      port: 5432,
      username: 'file',
      password: 'file',
      database: 'file',
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
