import { Module } from '@nestjs/common';
// import { SharedModule } from '../services/shared.module';
import { PrismaService } from '../services/prisma.service';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  // imports: [SharedModule],
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
