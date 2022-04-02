import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../services/prisma/prisma.service';
import { PrismaService } from '../services/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Get user
  async getUser(
    // userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    id: string,
  ): Promise<User | null> {
    // return this.prisma.user.findUnique({
    //   where: userWhereUniqueInput,
    // });
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  // List user
  async listUser(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // Create user
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // Update user
  // async updateUser(params: {
  //   where: Prisma.UserWhereUniqueInput;
  //   data: Prisma.UserUpdateInput;
  // }): Promise<User> {
  async updateUser(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    // const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  // Delete user
  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
