import prisma from '../prisma/client';
import { BaseService } from './baseService';
import { CreateUserModel, UserViewModel } from '@/models/user';
import { ConverterUserInputToModel, ConverterUserToViewModel } from '@/prisma/transformer/user';

export class UserService extends BaseService<CreateUserModel, UserViewModel> {
  constructor() {
    super(prisma, 'user', ConverterUserInputToModel, ConverterUserToViewModel);
  }

  async getByEmailAndPasword(email: string, password: string) {
    try {
      const data = await prisma.user.findFirst({
        where: {
          email: {
            equals: email,
          },
          password: {
            equals: password
          }
        },
        include: this.getInclude()
      })

      return this.convertEntityToViewModel(data);
    }
    catch (error) {
      console.error(error);
      throw new Error(`Error getting  ${this.model.toString()}`);
    }
  }

  protected getInclude() {
    return {
      student: {
        include: {
          user: true
        }
      },
      teacher: {
        include: {
          user: true
        }
      },
      parent: {
        include: {
          user: true
        }
      }
    }
  }
}