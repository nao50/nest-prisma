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

  // Create user
  @Post('')
  async createUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  // Update user
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.updateUser({ id: id }, userData);
  }

  // Delete user
  @Put(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: id });
  }
}
