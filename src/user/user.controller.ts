import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get user
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserModel> {
    // async getUser(@Param('id') id: number): Promise<UserModel> {
    // return this.userService.getUser({ id: id, email: '' });
    return this.userService.getUser(id);
  }

  // List user
  @Get('')
  async listUser(): Promise<UserModel[]> {
    return this.userService.listUser({});
  }

  @Post('')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
