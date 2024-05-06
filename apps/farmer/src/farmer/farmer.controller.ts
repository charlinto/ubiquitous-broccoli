import { Body, Controller, Post } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateFarmerDto, UpdateDto } from './dto/dto';
import { IFarmer } from './ifarmer.interface';
import { CreateUserDto } from '@app/lib/auth/dto/create-auth.dto';
import { ValidationDto } from '@app/lib/auth/dto/login-auth.dto';
import { $Enums } from '@prisma/client';
import { FindDto } from './dto/find.dto';

@Controller('farmer')
@ApiTags('farmer')
// @UseGuards(ExtensionWorkerGuard)
export class FarmerController {
  /**
   *
   */
  constructor(private readonly farmer: FarmerService) {}
  @Post('FindByEmail')
  FindByEmail(data: Partial<ValidationDto>) {
    return this.farmer.FindByEmail(data);
  }
  @Post('FindById')
  FindById(data: FindDto) {
    return this.farmer.FindById(data);
  }
  @Post('FindByPhone_Number')
  FindByPhone_Number(data: FindDto) {
    return this.farmer.FindByPhone_Number(data);
  }
  @Post('FindByFirst_name')
  FindByFirst_name(data: FindDto) {
    return this.farmer.FindByFirst_name(data);
  }
  @Post('Createfarmer')
  Create_Farmer(@Body() data: CreateFarmerDto) {
    return this.farmer.CreateResource(data);
  }
  @Post('UpdateProperty')
  UpdateProperty(@Body() data: UpdateDto) {
    return this.farmer.UpdateProperties(data);
  }
}
