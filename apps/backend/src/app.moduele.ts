import { Module } from '@nestjs/common';
import { UserController } from './app/user.controller';
import { UserService } from './app/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
