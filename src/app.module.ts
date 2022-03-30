import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { SharedModule } from './services/shared.module';
import { UserModule } from './user/user.module';

@Module({
  // imports: [SharedModule, UserModule],
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
