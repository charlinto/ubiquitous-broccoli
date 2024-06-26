import { BadRequestException, Injectable } from '@nestjs/common';
import { IAdmin } from './iadmin.interface';
import { CreateUserDto } from '@app/lib/auth/dto/create-auth.dto';
import { User } from '@prisma/client';
import { DbService } from '@app/lib/db/db.service';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';
import { UpdateDto } from 'apps/farmer/src/farmer/dto/dto';
import { FindDto } from 'apps/farmer/src/farmer/dto/find.dto';
import { generateShortId } from '@app/lib/short_id';

@Injectable()
export class AdminService implements IAdmin {
  /**
   *
   */
  constructor(private readonly db: DbService) { }
  async UpdateFirstName(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          id: data['id'],
          type: 'ADMIN',
        },
        data: {
          first_name: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdateLastName(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          id: data['id'],
          type: 'ADMIN',
        },
        data: {
          last_name: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdatePhoneNumber(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          id: data['id'],
          type: 'ADMIN',
        },
        data: {
          phone_number: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindById(data: FindDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['id'],
          type: 'ADMIN',
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByPhone_Number(data: FindDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['id'],
          type: 'ADMIN',
          phone_number: data['property'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async FindByFirst_name(data: FindDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['id'],
          type: 'ADMIN',
          first_name: data['property'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdatePassword(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          email: data['property']['email'],
          type: 'ADMIN',
        },
        data: {
          password: data['property']['password'],
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async CreateResource(data: CreateUserDto): Promise<User> {
    try {
      const user = await this.db.user.create({
        data: {
          id: generateShortId(),
          email: data['email'],
          first_name: data['first_name'],
          last_name: data['last_name'],
          password: data['password'],
          phone_number: data['phone_number'],
          type: 'ADMIN',
          adminProfile: {
            create: {
              id: generateShortId(),
            },
          },
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  SignOut() {
    throw new Error('Method not implemented.');
  }
  async FindByEmail(data: Partial<ValidationDto>): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          email: data['email'],
          type: 'ADMIN',
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
