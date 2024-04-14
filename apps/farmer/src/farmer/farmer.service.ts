import { BadRequestException, Injectable } from '@nestjs/common';
import { IFarmer } from './ifarmer.interface';
import { CreateUserDto } from '@app/lib/auth/dto/create-auth.dto';
import { User } from '@prisma/client';
import { DbService } from '@app/lib/db/db.service';
import { FindDto } from './dto/find.dto';
import { UpdateDto } from './dto/dto';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';

@Injectable()
export class FarmerService implements IFarmer {
  /**
   *
   */
  constructor(private readonly db: DbService) {}

  async UpdateProperties(data: UpdateDto): Promise<any> {
    try {
      let query =
        data['new_value']['first_name'] !== undefined
          ? await this.db.user.update({
              data: {
                first_name: data['new_value']['first_name'],
              },
              where: {
                id: data['id'],
                type: 'FARMER',
              },
            })
          : data['new_value']['last_name'] !== undefined
          ? await this.db.user.update({
              data: {
                last_name: data['new_value']['last_name'],
              },
              where: {
                id: data['id'],
                type: 'FARMER',
              },
            })
          : data['new_value']['phone_number'] !== undefined
          ? await this.db.user.update({
              data: {
                phone_number: data['new_value']['phone_number'],
              },
              where: {
                id: data['id'],
                type: 'FARMER',
              },
            })
          : data['new_value']['email'] !== undefined
          ? await this.db.user.update({
              data: {
                email: data['new_value']['email'],
              },
              where: {
                id: data['id'],
                type: 'FARMER',
              },
            })
          : new BadRequestException('pass in a valid property  please');
      return query;
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async UpdateFirstName(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          id: data['id'],
          type: 'FARMER',
        },
        data: {
          first_name: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  async UpdateLastName(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          id: data['id'],
          type: 'FARMER',
        },
        data: {
          last_name: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  async UpdatePhoneNumber(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          id: data['id'],
          type: 'FARMER',
        },
        data: {
          phone_number: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  async FindById(data: FindDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['id'],
          type: 'FARMER',
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  async FindByPhone_Number(data: FindDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['id'],
          type: 'FARMER',
          phone_number: data['property'],
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  async FindByFirst_name(data: FindDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          id: data['id'],
          type: 'FARMER',
          first_name: data['property'],
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  async UpdatePassword(data: UpdateDto): Promise<User> {
    try {
      const user = await this.db.user.update({
        where: {
          email: data['property'],
          type: 'FARMER',
        },
        data: {
          password: data['new_value'],
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  async CreateResource(data: CreateUserDto): Promise<User> {
    try {
      const user = await this.db.user.create({
        data: {
          email: data['email'],
          first_name: data['first_name'],
          last_name: data['last_name'],
          password: data['password'],
          phone_number: data['phone_number'],
          type: 'FARMER',
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  SignOut() {
    throw new Error('Method not implemented.');
  }
  async FindByEmail(data: ValidationDto): Promise<User> {
    try {
      const user = await this.db.user.findFirstOrThrow({
        where: {
          email: data['property'],
          type: 'FARMER',
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
